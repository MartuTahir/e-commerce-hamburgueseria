import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { useState } from 'react'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useAuth } from '../../context/AuthContext';
import google from '../../assets/g-logo.png'

export const Login = () => {

    const auth = useAuth()
    const [passwRegister, setPasswRegister] = useState("")
    const [name, setName] = useState("")
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

    const handleSubmit = (e) => {
        e.preventDefault()
        if (register === false) {
            auth.login(email, passwRegister)
        } else{
            auth.register(email, passwRegister)
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

    const handleGoogle = (e) => {
        e.preventDefault()
        auth.loginWithGoogle()
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
                    sx={{marginTop: '1rem'}}
                    size='small'
                    id='name'
                    label='Nombre y Apellido'
                    type='text'
                    variant='outlined'
                    required
                    color='secondary'
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    size='small'
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
                <FormControl sx={{ width: '25rem', height:'2.5rem' }} variant="outlined" className='password'>
                    <InputLabel htmlFor="outlined-adornment-password" color='secondary'>Contraseña</InputLabel>
                    <OutlinedInput
                        size='small'
                        onChange={(e) => setPasswRegister(e.target.value)}
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
                <button onClick={(e) => handleGoogle(e)} className='btn-google'>
                    <img src={google} className='g-logo'/>
                    <p className='p-google'>Ingresa con Google</p>
                </button>
                <button type='button' className='btn-transparent' onClick={() => setRegister(!register) }>
                    {register ? '¿Ya tenés una cuenta? Inicia sesión' : '¿Todavia no tenés cuenta? Registrate' }
                </button>
            </Box>
    </div>
    )
}
