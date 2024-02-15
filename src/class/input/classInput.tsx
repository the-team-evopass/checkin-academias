import '../../assets/styles/components/input/styleInput.css'

interface CustomInputProps {
    classScopeName: string;
    isLabel?: boolean;
    label: string;
    type: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    onChange: (value: string) => void;
}

export function CustomInput({ classScopeName, isLabel, label, type, placeholder, error, errorMessage, onChange, ...props }: CustomInputProps): JSX.Element {
    return (
        <div className={`${classScopeName}-custom-input custom-input ${error ? 'custom-input-error' : ''}`}>
            {
                isLabel && (
                    <label htmlFor={label} className={`${classScopeName}-custom-input-label custom-input-label`}>{label}</label>
                )
            }
            <input
                type={type} 
                id={label} 
                placeholder={placeholder} 
                onChange={(e) => onChange(e.target.value)} 
                className={`${classScopeName}-custom-input-field custom-input-field`}
                {...props} 
            />
            {error && errorMessage && <span className={`${classScopeName}-custom-input-error-message custom-input-error-message`}>{errorMessage}</span>}
        </div>
    );
}