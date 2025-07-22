import cl from "./AddNoteButton.module.css";

export default function AddNoteButton({onClick, visible, setVisible }) {
  const rootClasses = [cl.add_note_button];
  if (visible) {
    rootClasses.push(cl.active);
  }
  return <button onClick={onClick} className={rootClasses.join(" ")}>New</button>;
}
