interface InputProps {
  optional?: boolean;
}

export function Input({ optional }: InputProps) {
  return (
    <div>
      <input type="text" id="" />
      {optional && <p>Optional</p>}
    </div>
  )
}