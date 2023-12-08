import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import { CssTextField } from './styles';

// 👇 Type of Props the FormInput receives
type FormInputProps = {
    name: string;
    numbersOnly?: boolean;
    maxLength?: number;
    // onCustomChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
} & TextFieldProps;

const FormInput: FC<FormInputProps> = ({ name, numbersOnly, maxLength, ...otherProps }) => {
    // Utilizing useFormContext to have access to the form Context
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            defaultValue=''
            render={({ field }) => (
                <CssTextField
                    {...field}
                    {...otherProps}
                    variant='outlined'
                    sx={{ mb: '1.5rem' }}
                    error={!!errors[name]}
                    name={name}
                    onChange={(e) => {
                        if (maxLength && e.target.value.trim().length > maxLength) return;
                        field.onChange(numbersOnly ? e.target.value.replace(/\D/g, '') : e.target.value);
                    }}
                    // onChange={(e) => console.log(e.target.value)}
                    helperText={errors[name] ? (errors[name]?.message as unknown as string) : ''}
                />
            )}
        />
    );
};

export { FormInput };