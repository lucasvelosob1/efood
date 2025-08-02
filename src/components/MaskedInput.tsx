import React from 'react'
import InputMask from 'react-input-mask'
import { FieldProps } from 'formik'

const MaskedInput: React.FC<FieldProps & { mask: string }> = ({ field, form, mask, ...props }) => {
  return <InputMask mask={mask} {...field} {...props} />
}

export default MaskedInput