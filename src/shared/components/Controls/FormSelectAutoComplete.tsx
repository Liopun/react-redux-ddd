import { FC, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { CssAutoComplete } from './styles';
import { useFormContext, Controller } from 'react-hook-form';
import { AutocompleteProps } from '@mui/material';
import { Tag } from '../../models/tag';

// 👇 Type of Props the FormInput receives
type FormSelectProps = {
    name: string;
    label: string;
    data: Tag[];
} & Partial<AutocompleteProps<Tag, boolean | undefined, boolean | undefined, boolean | undefined>>;

const FormSelectAutoComplete: FC<FormSelectProps> = (props) => {
    // Utilizing useFormContext to have access to the form Context
    const {
        control,
        formState: { errors },
    } = useFormContext();
    const { name, label, data } = props;

    return (
        <Fragment>
            <Controller
                control={control}
                name={name}
                render={({ field }) => {
                    return (
                        <CssAutoComplete
                            disablePortal
                            disableClearable
                            id={label}
                            options={data}
                            renderInput={(params) => <TextField {...params} label={label} required />}
                            isOptionEqualToValue={(option, item) =>
                               (option as Tag).value === (item as Tag).value
                            }
                            {...field}
                            onChange={(_, item) => field.onChange(item)}
                        />
                    );
                }}
            />

            <FormHelperText> {errors[name] ? (errors[name]?.message as unknown as string) : ''} </FormHelperText>
        </Fragment>
    );
};

export { FormSelectAutoComplete };