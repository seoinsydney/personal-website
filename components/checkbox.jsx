

export default function MyCheckbox({label, id}) {
    return (
        <>
        <label>
            <input type="checkbox" value={id} /><span>{label}</span>
        </label>
        </>
    )
}