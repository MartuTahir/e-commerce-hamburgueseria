import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { useState } from 'react'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { app }  from '../../firebase/config';

const auth = getAuth(app)

export const Login = () => {

    const [register, setRegister] = useState(true)
    const [email, setEmail] = useState("")
    const [error, setError] = useState({
        error: false,
        message: ""
    })

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const mail = e.target.email.value
        const password = e.target.contraseña.value
        if (register) {
            await createUserWithEmailAndPassword(auth, mail, password)
        } else {
            await signInWithEmailAndPassword(auth, mail, password)
        }

        if (validateEmail(email)) {
            setError({
                error: false,
                message: ""
            })
        } else {
            setError({
                error: true,
                message: "Formato de email incorrecto"
            })
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  return (
    <div className='flex'>
            <div className="container-formL">
                <h1 className='title-form'>{register ? 'Registrarse' : 'Iniciar sesión'}</h1>
            </div>
            <Box component='form'  onSubmit={handleSubmit} className='container-login'>
                <TextField
                    id='name'
                    label='Nombre y Apellido'
                    type='text'
                    variant='outlined'
                    required
                    color='secondary'
                />
                <TextField
                    id='email'
                    label='E-mail'
                    type='email'
                    variant='outlined'
                    helperText= {error.message}
                    error= {error.error}
                    required
                    color='secondary'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl sx={{ width: '25rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" color='secondary'>Contraseña</InputLabel>
                    <OutlinedInput
                        id="contraseña"
                        color='secondary'
                        type={showPassword ? 'text' : 'password'}
                        endAdornment= {
                        <InputAdornment position="end">
                            <IconButton
                            color='secondary'
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <button type='submit' className=' btn-login'>
                    {register ? 'Registrarme' : 'Ingresar'}
                </button>
                <button type='button' className='btn-transparent' onClick={() => setRegister(!register) }>
                    {register ? '¿Ya tenés una cuenta? Inicia sesión' : '¿Todavia no tenés cuenta? Registrate' }
                </button>
            </Box>
    </div>
    )
}
