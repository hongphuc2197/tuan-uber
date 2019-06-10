import React from 'react'
import * as Yup from 'yup';
import './FormRegister.scss';
import {Formik,Form,Field} from 'formik'   
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const registerSchema = Yup.object().shape({
    phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required')
})
// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

// Checkbox input
const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
    
      />
      <label htmlFor={id}>{label}</label>
      {touched[name] && <InputFeedback error={errors[name]} />}
    </div>
  );
};

const formRegister = (props) =>{
    return (
        <div>
            <Formik
            initialValues = {{
                phone: '',
                singleCheckbox: false
            }}
            validationSchema = {registerSchema}
            onSubmit = {values => {
                
            }}
            render = {({
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
                isSubmitting
            })=>(
                <section>
                    <Form>
                        <h2>Get moving with Uber</h2>
                        <label>+84</label>
                        <Field name="phone" type="text" className = "Input"/>
                        <Field
                            component={Checkbox}
                            name="singleCheckbox"
                            id="singleCheckbox"
                            label="Agree to something"
                        />
                        
                    </Form>
                    
                </section>
            )}
            
                
            /   >

        </div>
    )
}

export default formRegister;