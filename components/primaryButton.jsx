import styles from '@/styles/components.module.scss';

export default function PrimaryButton({ disabled, children }) {
    const buttonStyles = {
        backgroundColor: disabled ? '#e0e0e0' : '#FFFFFF', // Gray if disabled, blue if enabled
        color: disabled ? '#808080' : '#000000', // Gray text if disabled, white text if enabled
        cursor: disabled ? 'not-allowed' : 'pointer', // Show different cursor for disabled/enabled buttons
      };
  return (
    <div className={styles.primaryButton}>
        <button 
        style={buttonStyles} 
        
        disabled={disabled}
        type="button"
        >
        {children}
        </button>
    </div>
  )
}
