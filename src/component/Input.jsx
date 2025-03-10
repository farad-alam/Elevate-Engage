import React from "react";

function Input({ type, label }) {
  return (
    <div className="relative">
      {type === "message" ? (
        <>
          <textarea
            id="hs-tac-message"
            className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                        focus:pt-6
                        focus:pb-2
                        not-placeholder-shown:pt-6
                        not-placeholder-shown:pb-2
                        autofill:pt-6
                        autofill:pb-2"
            placeholder="This is a textarea placeholder"
            data-hs-textarea-auto-height
          ></textarea>
          <label
            for="hs-tac-message"
            className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-neutral-400
                        peer-not-placeholder-shown:text-xs
                        peer-not-placeholder-shown:-translate-y-1.5
                        peer-not-placeholder-shown:text-neutral-400"
          >
            {label}
          </label>
        </>
      ) : (
        <>
          <input
            type={type}
            id={`hs-tac-input-${label.toLowerCase()}`}
            className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
            placeholder={label}
          />
          <label
            for={`hs-tac-input-${label.toLowerCase()}`}
            className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:text-xs
                            peer-focus:-translate-y-1.5
                            peer-focus:text-neutral-400
                            peer-not-placeholder-shown:text-xs
                            peer-not-placeholder-shown:-translate-y-1.5
                            peer-not-placeholder-shown:text-neutral-400"
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
}

export default Input;
