import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { ADDRESS_ZERO } from 'config/constants';
import { Network } from 'config/Networks/Network';
import { formatEther } from 'ethers/lib/utils';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
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

const getData = (name: string | undefined, address: string | undefined) => {
    const addressOrName = Network.getNetworkDetail(name)?.contracts.weth ?? ADDRESS_ZERO;
    const { data } = useContractRead({
        addressOrName: addressOrName,
        contractInterface: ERC20abi,
        functionName: 'balanceOf',
        args: address ?? ADDRESS_ZERO,
    });
    return formatEther(data ?? 0);
};

const Landing: () => JSX.Element = observer(() => {
    const classes = useStyles();

    const { address } = useAccount();
    const { chain } = useNetwork();

    const shortenedAddress = address
        ? address.substring(0, 5) + '...' + address.substring(address.length - 4, address.length)
        : undefined;

    useEffect(() => {
        toast.info(shortenedAddress ? `${shortenedAddress} connected!!` : 'You have disconnected');
    }, [address]);

    const wethBalance = getData(chain?.name, address);

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
                            <Typography variant="body2">Example Contract Call - You have {wethBalance} WETH</Typography>
                        )}
                    </div>
                )}
                {!address && <Typography variant="body2">Please connect your wallet</Typography>}
            </div>
        </LayoutContainer>
    );
});

export default Landing;
