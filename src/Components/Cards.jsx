import React from "react";

export default function Cards(props) {
  const { members } = props;
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.name}
            className="px-4 py-5 bg-cyan-100 shadow rounded-lg overflow-hidden sm:p-6"
          >
            <div className="pb-3 text-center border-b border-black">IMAGEN</div>
            <div>
              <span className="block text-sm text-left font-medium">
                Nombre: {member.name}
              </span>
              <span className="block text-sm text-left font-medium">
                Edad: {member.age}
              </span>
              <span className="block text-sm text-left font-medium">
                Poderes:
                <div className="inline-grid">
                  {member.powers.map((power) => (
                    <span className="" key={power}>
                      - {power}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
