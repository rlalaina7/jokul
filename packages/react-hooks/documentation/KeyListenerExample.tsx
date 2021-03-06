import React, { useState, useRef } from "react";
import { useKeyListener } from "../src/useKeyListener";

export default function KeyListenerExample() {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);
    const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);

    function onKeyPressInside(event: KeyboardEvent) {
        if (active) {
            setPressedKeys([...pressedKeys, event.key]);
        }
    }
    const resetList = () => setPressedKeys([]);
    useKeyListener(ref, keys, onKeyPressInside);

    return (
        <section className="hooks-example key-listener-example jkl-spacing--bottom-3">
            <p className="hooks-example__header">Lytter etter trykk på piltastene</p>
            <p className="hooks-example__text">
                Flytt fokus til aktiver-knappen under med Tab eller ved å trykke på den. Trykk på piltastene vil nå
                listes opp under. Klikk utenfor knappen, eller flytt fokus med Tab, for å se at tastetrykkene ikke
                lenger registreres.
            </p>
            <button ref={ref} className="jkl-button jkl-button--secondary jkl-spacing--right-1" onClick={toggleActive}>
                {active ? "Deaktiver" : "Aktiver"}
            </button>
            <button className="key-listener-example__spaced-item jkl-button jkl-button--tertiary" onClick={resetList}>
                Nullstill liste
            </button>
            {pressedKeys.length !== 0 && (
                <ul className="hooks-example__list jkl-list jkl-list--unordered">
                    {pressedKeys.map((key, i) => (
                        <li key={i} className="jkl-list__item">
                            {key}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
