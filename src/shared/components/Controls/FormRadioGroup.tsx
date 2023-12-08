import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroupProps } from '@mui/material';
import { FC, Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CssRadioGroup } from './styles';

type Props = {
    name: string;
    label: string;
    data: string[];
} & RadioGroupProps;
const FormRadioGroup: FC<Props> = (props) => {
    // Utilizing useFormContext to have access to the form Context
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const { name, label, data, ...otherProps } = props;

    return (
        <Fragment>
            <Controller
                control={control}
                name={name}
                render={({ field }) => {
                    return (
                        <FormControl fullWidth={true} error={!!errors[name]} required>
                            <FormLabel id={label}>{label}</FormLabel>
                            <CssRadioGroup {...field} {...otherProps} row aria-labelledby={label} name={name}>
                                {data.map((item) => (
                                    <FormControlLabel
                                        key={item.toLowerCase()}
                                        value={item.toLowerCase()}
                                        control={<Radio size='small' />}
                                        label={item}
                                    />
                                ))}
                            </CssRadioGroup>
                            <FormHelperText>
                                {' '}
                                {errors[name] ? (errors[name]?.message as unknown as string) : ''}{' '}
                            </FormHelperText>
                        </FormControl>
                    );
                }}
            />
        </Fragment>
    );
};

export { FormRadioGroup };