import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { contracts as mainnetContracts } from 'config/Networks/Ethereum/contracts';
import { contracts as goerliContracts } from 'config/Networks/Goerli/contracts';
import { BigNumber } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useContractRead, useNetwork } from 'wagmi';

import ERC20abi from '../abi/ERC20.json';
import { LayoutContainer } from '../components/common/Containers';

const useStyles = makeStyles({
  root: {
    marginTop: 48,
  },
  title: {
    textAlign: 'center',
  },
  body: {
    textAlign: 'center',
    paddingTop: '2rem',
  },
});

const Landing: () => JSX.Element = observer(() => {
  const classes = useStyles();

  const { address } = useAccount();
  const { chain } = useNetwork();
  const [wethBalance, setWethBalance] = useState<BigNumber | null>();

  const shortenedAddress = address
    ? address.substring(0, 5) + '...' + address.substring(address.length - 4, address.length)
    : undefined;

  const contractAddress = chain?.id === 5 ? goerliContracts.weth : mainnetContracts.weth;

  const { data } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: ERC20abi,
    functionName: 'balanceOf',
    args: address,
  });

  useEffect(() => {
    toast.info(shortenedAddress ? `${shortenedAddress} connected!!` : 'You have disconnected');
    if (data) {
      console.log('data:', data);
      // @ts-ignore
      setWethBalance(formatEther(data));
    }
  }, [address, shortenedAddress, data]);

  return (
    <LayoutContainer className={classes.root}>
      <Typography variant="h4" className={clsx(classes.title)}>
        THIS IS THE LANDING PAGE
      </Typography>
      <div className={classes.body}>
        {address && (
          <div>
            <Typography variant="body2">Thank you for connecting {address}</Typography>
            {wethBalance && (
              <Typography variant="body2">Example Contract Call - You have {wethBalance.toString()} WETH</Typography>
            )}
          </div>
        )}
        {!address && <Typography variant="body2">Please connect your wallet</Typography>}
      </div>
    </LayoutContainer>
  );
});

export default Landing;
