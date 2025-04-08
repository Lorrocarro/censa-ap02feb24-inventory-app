import styles from './FormInput.module.css';
import { useState } from 'react';
import styles from '../Login-form/index.module.css';


export default function FormInput({
    label = '',
    type = 'text',
    pwdButtonTitle = 'Click para Mostrar/Ocultar contraseña',
    pwdIsVisibleContent = 'Ocultar',
    pwdIsNotVisibleContent = 'Mostrar',
    ...props
}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(prev => !prev);
    };


    return (
        <label className={styles['form-input']}>
            {label && <span className={styles['label']}>{label}</span>}
            <span className={styles['input-group']}>
                <input type={isVisible ? 'text' : type} {...props} />
                {type === 'password' && (
                    <button
                        type="button"
                        title={pwdButtonTitle}
                        onClick={handleClick}
                        className={styles['toggle-password']}
                    >
                        {isVisible ? pwdIsVisibleContent : pwdIsNotVisibleContent}
                    </button>
                )}
            </span>
        </label>
    );
}
