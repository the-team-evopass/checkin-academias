import '../../assets/styles/components/input/styleInput.css'

interface CustomInputProps {
    classScopeName: string;
    isLabel?: boolean;
    label: string;
    type: string;
    placeholder?: string;
    value?: string;
    maxLength?: number;
    pattern?: string;
    error?: boolean;
    errorMessage?: string;
    onChange: (value: string) => void;
    options?: { value: string, label: string }[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export function CustomInput({ classScopeName, isLabel, label, type, placeholder, value, maxLength, pattern, error, errorMessage, onChange, options, ...props }: CustomInputProps): JSX.Element {
    
    return (
        <div className={`${classScopeName}-custom-input custom-input ${error ? 'custom-input-error' : ''}`}>
            {
                isLabel && (
                    <label htmlFor={label} className={`${classScopeName}-custom-input-label custom-input-label`}>{label}</label>
                )
            }
            {
                type === 'select' ? (
                    <select 
                        id={label}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`${classScopeName}-custom-input-select custom-input-field`}
                        {...props}
                    >
                        {options?.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type} 
                        id={label} 
                        placeholder={placeholder} 
                        value={value}
                        maxLength={maxLength}
                        pattern={pattern}
                        onChange={(e) => onChange(e.target.value)} 
                        className={`${classScopeName}-custom-input-field custom-input-field`}
                        {...props} // Spread props to include any additional properties
                    />
                )
            }
            {error && errorMessage && <span className={`${classScopeName}-custom-input-error-message custom-input-error-message`}>{errorMessage}</span>}
        </div>
    );
}