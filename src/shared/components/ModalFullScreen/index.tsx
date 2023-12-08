import React, { FC, MouseEventHandler, forwardRef, ReactElement, Ref } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogProps } from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

type Props = {
    open: boolean;
    handleClose: () => void;
} & DialogProps;

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement;
    },
    ref: Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const ModalFullScreen: FC<Props> = (props) => {
    const { open, handleClose, children } = props;
    const avoidDismissal = (_e: MouseEventHandler<HTMLButtonElement>, reason: string) => {
        if (reason && reason === 'backdropClick') return;
        handleClose();
    };

    return (
        <Dialog fullScreen open={open} onClose={avoidDismissal} TransitionComponent={Transition}>
            {children}
        </Dialog>
    );
};

export default ModalFullScreen;
