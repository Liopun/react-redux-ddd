import React, { FC, MouseEventHandler } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Stack } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

type Props = {
    open: boolean;
    handleClose: () => void;
    title: string;
} & DialogProps;

const Modal: FC<Props> = (props) => {
    const { open, handleClose, title, children } = props;
    const avoidDismissal = (_e: MouseEventHandler<HTMLButtonElement>, reason: string) => {
        if (reason && reason === 'backdropClick') return;
        handleClose();
    };

    return (
        <Dialog open={open} onClose={avoidDismissal} maxWidth='sm' fullWidth>
            <DialogTitle>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='flex-end'
                    spacing={1}
                    borderBottom='1px solid #ccc'>
                    <Box>{title}</Box>
                    <Box>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Stack>
            </DialogTitle>
            {children}
        </Dialog>
    );
};

export default Modal;