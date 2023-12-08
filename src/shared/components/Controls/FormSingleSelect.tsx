import { FC, Fragment } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { useFormContext, Controller } from 'react-hook-form';
import OutlinedInput from '@mui/material/OutlinedInput';
import { SelectProps } from '@mui/material';
import { CssSelectField } from './styles';
import { Tag } from '../../models/tag';

// 👇 Type of Props the FormInput receives
type FormSelectProps = {
    name: string;
    label: string;
    data: Tag[];
} & SelectProps;

const FormSingleSelect: FC<FormSelectProps> = (props) => {
    // Utilizing useFormContext to have access to the form Context
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const { name, label, data, required, ...otherProps } = props;

    return (
        <Fragment>
            <Controller
                control={control}
                name={name}
                defaultValue=''
                render={({ field }) => {
                    return (
                        <FormControl fullWidth={true} error={!!errors[name]} required>
                            <InputLabel htmlFor={name} id={label}>
                                {' '}
                                {label}{' '}
                            </InputLabel>
                            <CssSelectField
                                labelId={label}
                                id={name}
                                input={<OutlinedInput label={label} />}
                                {...field}
                                {...otherProps}>
                                {data.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </CssSelectField>
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

export { FormSingleSelect };