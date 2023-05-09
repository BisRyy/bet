import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
// @mui
import {
  Grid,
  Stack,
  Divider,
  MenuItem,
  Backdrop,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { DatePicker } from '@mui/x-date-pickers';
// components
import Iconify from '../../../../components/iconify';
import FormProvider, {
  RHFEditor,
  RHFSelect,
  RHFUpload,
  RHFSwitch,
  RHFSlider,
  RHFCheckbox,
  RHFTextField,
  RHFRadioGroup,
  RHFMultiSelect,
  RHFAutocomplete,
  RHFMultiCheckbox,
} from '../../../../components/hook-form';
//
import { FormSchema } from './schema';
import ValuesPreview from './ValuesPreview';

// ----------------------------------------------------------------------

const OPTIONS = [
  { value: 'option 1', label: 'Option 1' },
  { value: 'option 2', label: 'Option 2' },
  { value: 'option 3', label: 'Option 3' },
  { value: 'option 4', label: 'Option 4' },
  { value: 'option 5', label: 'Option 5' },
  { value: 'option 6', label: 'Option 6' },
  { value: 'option 7', label: 'Option 7' },
  { value: 'option 8', label: 'Option 8' },
];

export const defaultValues = {
  age: 0,
  email: '',
  fullName: '',
  //
  editor: '',
  switch: false,
  radioGroup: '',
  autocomplete: null,
  //
  password: '',
  confirmPassword: '',
  //
  startDate: new Date(),
  endDate: null,
  //
  singleUpload: null,
  multiUpload: [],
  //
  singleSelect: '',
  multiSelect: [],
  //
  checkbox: false,
  multiCheckbox: [],
  //
  slider: 8,
  sliderRange: [15, 80],
};

ReactHookForm.propTypes = {
  debug: PropTypes.bool,
};

export default function ReactHookForm({ debug }) {
  const [showPassword, setShowPassword] = useState(false);

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('DATA', data);
    reset();
  };

  const handleDropSingleFile = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (newFile) {
        setValue('singleUpload', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      const files = values.multiUpload || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue('multiUpload', [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.multiUpload]
  );

  return (
    <>
      {isSubmitting && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      )}

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Block>
                <RHFTextField name="fullName" label="Full Name" />
              </Block>

              <Block>
                <RHFTextField name="email" label="Email address" />
              </Block>

              <Block>
                <RHFTextField
                  name="age"
                  label="Age"
                  onChange={(event) =>
                    setValue('age', Number(event.target.value), { shouldValidate: true })
                  }
                  InputProps={{
                    type: 'number',
                  }}
                />
              </Block>

              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      label="Start date"
                      inputFormat="dd/MM/yyyy"
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          {...params}
                          error={!!error}
                          helperText={error?.message}
                        />
                      )}
                    />
                  )}
                />

                <Controller
                  name="endDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      label="End date"
                      inputFormat="dd/MM/yyyy"
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          {...params}
                          error={!!error}
                          helperText={error?.message}
                        />
                      )}
                    />
                  )}
                />
              </Stack>

              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <Block>
                  <RHFTextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Block>

                <Block>
                  <RHFTextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Block>
              </Stack>

              <Block label="RHFAutocomplete">
                <RHFAutocomplete
                  name="autocomplete"
                  label="Autocomplete"
                  options={OPTIONS}
                  getOptionLabel={(option) => option.label}
                  isOptionEqualToValue={(option, value) => option.value === value.value}
                />
              </Block>

              <Block label="RHFSelect">
                <RHFSelect name="singleSelect" label="Single select">
                  <MenuItem value="">None</MenuItem>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  {OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Block>

              <Block label="RHFMultiSelect">
                <RHFMultiSelect
                  chip
                  checkbox
                  name="multiSelect"
                  label="Multi select"
                  options={OPTIONS}
                />
              </Block>

              <Block label="RHFEditor">
                <RHFEditor simple name="editor" sx={{ height: 200 }} />
              </Block>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Block label="RHFUpload">
                <RHFUpload
                  name="singleUpload"
                  maxSize={3145728}
                  onDrop={handleDropSingleFile}
                  onDelete={() => setValue('singleUpload', null, { shouldValidate: true })}
                />
              </Block>

              <Block label="RHFUpload">
                <RHFUpload
                  multiple
                  thumbnail
                  name="multiUpload"
                  maxSize={3145728}
                  onDrop={handleDropMultiFile}
                  onRemove={(inputFile) =>
                    setValue(
                      'multiUpload',
                      values.multiUpload &&
                        values.multiUpload?.filter((file) => file !== inputFile),
                      { shouldValidate: true }
                    )
                  }
                  onRemoveAll={() => setValue('multiUpload', [], { shouldValidate: true })}
                  onUpload={() => console.log('ON UPLOAD')}
                />
              </Block>

              <RHFCheckbox name="checkbox" label="RHFCheckbox" />

              <RHFSwitch name="switch" label="RHFSwitch" />

              <RHFRadioGroup
                row
                name="radioGroup"
                label="RHFRadioGroup"
                spacing={4}
                options={[
                  { value: 'option 1', label: 'Radio 1' },
                  { value: 'option 2', label: 'Radio 2' },
                  { value: 'option 3', label: 'Radio 3' },
                ]}
              />

              <RHFMultiCheckbox
                row
                name="multiCheckbox"
                label="RHFMultiCheckbox"
                spacing={4}
                options={[
                  { value: 'option 1', label: 'Checkbox 1' },
                  { value: 'option 2', label: 'Checkbox 2' },
                  { value: 'option 3', label: 'Checkbox 3' },
                ]}
              />

              <Block label="RHFSlider">
                <RHFSlider name="slider" />
              </Block>

              <Block label="RHFSlider">
                <RHFSlider name="sliderRange" />
              </Block>

              <LoadingButton
                fullWidth
                color="info"
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Submit to check
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>

        {debug && <ValuesPreview />}
      </FormProvider>
    </>
  );
}

// ----------------------------------------------------------------------

Block.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object,
};

function Block({ label = 'RHFTextField', sx, children }) {
  return (
    <Stack spacing={1} sx={{ width: 1, ...sx }}>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'right',
          fontStyle: 'italic',
          color: 'text.disabled',
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}
