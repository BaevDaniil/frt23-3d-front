export function toggle(JSX, state) {
  return (
    <div>
      {state ? JSX : null}
    </div>);
}