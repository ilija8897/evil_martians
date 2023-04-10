import React from 'react'
import {Input} from '../Input/Input'
import './Form.css'

export const Form = () => {
    return (
        <div className="form">
            <h3 className="form_title">Reg form</h3>
            <div className='form_input'>
                <Input
                    type="text"
                    name="login"
                />

                <Input
                    type="password"
                    name="password"
                />
            </div>
            
            <div className='from_reg'>
                <Input
                    type="submit"
                    name="Register"
                    class="login"
                />
            </div>
        </div>
    )
}