import React from "react";

function Input({ type, label }) {
  return (
    <div className="relative">
      {type === "message" ? (
        <>
          <textarea
            id="hs-tac-message"
            className="peer p-3 sm:p-4 block w-full bg-gray-300 text-light dark:bg-neutral-700 border-transparent rounded-lg sm:text-sm  placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
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
            htmlFor="hs-tac-message"
            className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
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
            className="peer p-3 sm:p-4 block w-full bg-gray-300 dark:bg-neutral-700 text-light text-base-content border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2"
            placeholder={label}
          />
          <label
            htmlFor={`hs-tac-input-${label.toLowerCase()}`}
            className="absolute top-0 start-0 p-3 sm:p-4 h-full text-gray-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
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
