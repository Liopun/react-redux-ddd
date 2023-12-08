import React, { useEffect, useRef, useState } from 'react';
import "emoji-picker-element";

interface Props {
    selectReaction: (unicode: string) => void;
}

const EmojiPicker: React.FC<Props> = ({ selectReaction }) => {
    const ref = useRef<any | null>(null);

    const style = document.createElement('style');

    const emojiClickHandler  = (event: any) => {
        selectReaction(event.detail.emoji.unicode)
    }

    style.textContent = `
        .picker {
            border-radius: 1rem !important;
            border-top-left-radius: 1rem !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 1rem !important;
            border: 1px solid rgba(55, 65, 81, .2) !important;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) !important;
        }

        .picker input.search {
            background-color: rgba(255, 255, 255, 1) !important;
            border: none !important;
            height: 3rem;
            padding: 0 1.5rem;
        }
    `

    useEffect(() => {
        if (ref.current) {
            ref.current.removeEventListener('emoji-click', emojiClickHandler); // cleanup first

            ref.current.addEventListener('emoji-click', emojiClickHandler);
            ref.current.skinToneEmoji = '👍';

            ref.current.shadowRoot.appendChild(style);
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener('emoji-click', emojiClickHandler);
            }
        }
    }, []);

    const elementProps = { ref: ref };

    return React.createElement('emoji-picker', elementProps);
};

export default EmojiPicker;