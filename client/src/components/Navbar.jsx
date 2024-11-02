import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileOptions) {
        if (
          !event.target.closest(".profile-icon") &&
          !event.target.closest(".profile-options")
        ) {
          setShowProfileOptions(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfileOptions]);

  return (
    <nav className="bg-blue-800 my-1 mx-1 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-4xl font-bold text-[#F2E307]">
        <Link to={isAuthenticated ? "" : "/"}>UNAH</Link>
      </h1>
      {/* ... */}
      <ul className="flex gap-x-2">
        <li>
          <button className="h-8 w-8 rounded-full hover:bg-gray-200 overflow-hidden focus:outline-none bg-white">
            <img
              className="h-full w-full"
              src="https://cdn.iconscout.com/icon/free/png-256/free-message-2367724-1976874.png"
              alt="Profile"
            />
          </button>
        </li>
        <li>
          <button
            className="h-8 w-8 rounded-full overflow-hidden focus:outline-none profile-icon"
            onClick={toggleProfileOptions}
          >
            <img
              className="h-full w-full"
              src="data:image/png;base64,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"
              alt="Profile"
            />
          </button>
          {showProfileOptions && (
            <div className="absolute right-10 mt-1 bg-white border rounded-lg shadow-lg profile-options">
              {/* Opciones del perfil */}
              <ul>
                <li>
                  <Link
                    to="/edit-profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  >
                    Editar Perfil
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      toggleProfileOptions();
                    }}
                    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          )}
        </li>
        {/* ... */}
      </ul>
    </nav>
  );
}

//------------------------------------------------------------------------

// export function Navbar() {
//   const { isAuthenticated, logout, user } = useAuth();
//   const [showProfileOptions, setShowProfileOptions] = useState(false);

//   const toggleProfileOptions = () => {
//     setShowProfileOptions(!showProfileOptions);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (showProfileOptions) {
//         if (
//           !event.target.closest(".profile-icon") &&
//           !event.target.closest(".profile-options")
//         ) {
//           setShowProfileOptions(false);
//         }
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showProfileOptions]);

//   return (
//     <nav className="bg-blue-800 my-1 mx-1 flex justify-between py-5 px-10 rounded-lg">
//       <h1 className="text-4xl font-bold text-[#F2E307]">
//         <Link to={isAuthenticated ? "" : "/"}>UNAH</Link>
//       </h1>

//       <ul className="flex gap-x-2">
//         <li>
//           <button className="h-9 w-9 rounded-full hover:bg-gray-200 overflow-hidden focus:outline-none bg-white">
//             <img
//               className="h-full w-full"
//               src="https://cdn.iconscout.com/icon/free/png-256/free-message-2367724-1976874.png"
//               alt="Profile"
//             />
//           </button>
//         </li>
//         <li>
//           <button
//             className="h-9 w-9 rounded-full overflow-hidden focus:outline-none"
//             onClick={toggleProfileOptions}
//           >
//             <img
//               className="h-full w-full"
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAClpaWgoKD7+/v39/fY2Njd3d3s7Ozz8/Pw8PDl5eXh4eGbm5v5+fnBwcG0tLRnZ2c3NzdYWFg/Pz/Dw8OsrKyAgIC7u7tMTEzKysqPj4+JiYl2dnYuLi5wcHBjY2MhISHQ0NAqKiocHBxRUVESEhJEREQ6OjoeHh4ODg58fHzbgQEyAAARb0lEQVR4nO1d6XrivA4eKIS9bGXfaQvtcP/3d4a2SLItyU7ihH7n4f1JjG0lsnbbf/488MADDzzwwAMPRECrOxn0NsPF9lS54e/2fXjpDZbN+r0nlxO1ZLp+P1Q0HBbrQXLveWZDY7rTaaP4uAy6955wKnSq42DiAKfdoH3viYfhuA7/djZGq1/PscksM3U/+Fz9Yn7trt/y0veFbe93sutgFIW8b4yX9ybHRmsVkbwvvPWe700UQWOnTvZ1selNJ0m32f5W8LV6p5H0q6vd4qD+b9a8M103JO/yJMereUOzW+rd/mov/33XKY0KGV1pgoveMvQbtPvrF4nGe3/H9pCd12G9rKXsqTXf8DTO7mq7svLl4ymrRktWrDzuRZ1zGgyY2Xz28i2dBmcynOaRZpwOHWbpDI8ROu4zRu37HWwAl0HferFWTHPt0liN1Hcokld7Btt+1AEGB3uARalS1fmAL5PoY8wdqTONPoaEtr0CR8VYkf2tNc64JENubq+/4iTd4K81VgxJ5oUtzosVAU/WaMXrxvrCHHFXtMXRsqymcVpjKSUa5nDbMrhmeTLGPBVqjU9MAldFjkVgLYwCX2vV/ICN4kaycDQlzqCoccxXOStqGA4108cuiHnMJR9fxeswddSliCEMe3hUvmPaOdAJDOMPsCi4/wAY0YR97N4NQ+0pdu+B6BVI4pn2fb9YprEYozKSsQbvGXU3LI5NvH7pAjjcN+LeppoxmsKievCjYLPQizr1vSPZ4dS8P8fpMg+eqdcYxbqhq3sco8PcoHI9go2akO4W+buLAsqouU2POunsJcbsYuCZkHjI2xlRhAdJyGyKCmPMJX1QJy7jPt8YVIy2+CadbVHuzOCfhya4u81YApXG7QVF/y2IigjWfHujAn9Q8ZBD2rRJN4KpdoucxjdVb0pK+EQ03JA9yEgWofCRkItjk4haeO1rkF2JEVN+x7eg+YW4JFIzQ/DoiS2ZMRpOrNwP/zTikmj2LBBwwBbZtOLI14EVeYtIoh0H5oVABxu8ZxmF8Cgfk+lUbMQi0SawUuEdGiLqM+grMn8h7HOwpxGLRJfAypZvSZZi+tg7ytFXvgFbWBCDRIZASaA+YwNBFsogDMAHfpfcPGKQyBJYqfBFi0dskFbv4z8FjXtyJxGFRIFAiU+RkwRWk4CKbsQ3IHJoVDNmlY9Eo6tqjchzQWWQ1mnGIYYtzx3EqTrb8+JJrHeSZDKYXjGYJEmHlwxOR8Tb5W2zia8BD5RRgv+CifxPfmaA507/afNu53KvOL1vnvodY1pMN7gahOWCyQbBvONArBlBCGODhji3ayXXzF90+jHr3/wyrhPiRPBTIe5BuGWD4VGBt6fue3Nm1+BLuHgqe13pLRHjXtDqyE/B+Rp8bVKI4ANaoN9vzq9q11H4MJoKnF6D36QoCv4r9CPiJxRSaF1oQNeGJOezgC5lFNuCw4+6O/Aj4vyl6CiOKcuJaAQSw0VSRAdoERaQRyUqmQkgwq2weiwSLUpgJUpvHEO6QclhVHVSh7gy7NhNHBLtT4WiXYr2jbwtKFA0SVk0MAZdQaSR+DHebdZXbHbjD6Wdy4uH2yOJqVDthwTeoLFgCRIyGBXLkPiyeVoy5ez1xuRpw9SoMottrTz7BkpuP4HI02KcF+oiuI9skjicNnS+qTWmZgUERwT4MaKLhLP2F4GCX3gSm0BKn5VcQOI2eJtWsoYwPctlYLbIiZOTv8kP0LWXfYTPnxZv/OPvSO4sXT1Rcvn6l2BD3eYvJylQgfm0PsoZMSwAolSStf808Dp9UKG+kqMtsFzlf8O8fbIGdp/JdQBAobgqlkKKw4OWWAIBS1Ve1NDEk4xCk1QOCgCF5dV9zfwUYlRFX/3QlbDGrgAKU/hjObH2U4iyRp8WvAjF/PmlFIIE+av1hKErpUzVvw6jYxdAIToMGpvCuxLtmStujcpL69+UtPp5QKdq5vfh1kgVuTej8jPTbLPgJuHVSgJgU+XzoLpX1TV4yGXtm2vdBlQThagHZKUP4RdFkv4hvFzW5nmYu+7+QUBPTtNAEFHXdBA1KGu31ZN/6ldcbs1kEQifWS9xBo+0rBIp2Gisl0X2b81EpwF9aU/0GNplmm9q1ALHQ9tU0nWwDH31eSBq4u7IkwDO397TECIHEjeDXvXFc6qhQ8YBvFBfQQKIQKmWCvwK304D1CpllNNimsjn+sHHFhJm9fB5Q2yrjG3W4Nx6KwfxzfPPj57nBNXwpvkBY/mVEzTlNTVM218EjzGDwrYgATBm72eYsT6tWXBPJIFa/O4ukurzJl7ANOUdO4iyebc0YQK1jP15GDryMheIGr6CCESp71WhiVuOd4EnF/k4Br43G6wBA94b+8fsW8kav7L3tMQ0FRcLAx9ZUCYAlLmS+G4PNl/6ZLQJOKDs1ni7G0jMg4kXnzcDXjBnt4Hd6rOncRcbH4+bGCfyvOur2my84JkC42jBc+MCk2CVegJMuArZ5Zw46e2R/OLdxq9sYyxB86xEMDw5dQEiy6MsMJHCTYY5s0OWuGxj7gXjR/Ts5gJFzREBqV9diaMu5DwQa7f+DTxzCY3PjKTDlaiH08Fq4Xx4+DZ6CRwWf7isXnNOPLmBkV6pGqM41TkM2nFuPvC6Kq/QG2Uq5aTjrCpc5FFpzCxwfKhSCHJ+zzy85cy0YDC1El1nTT0z0V6LamOXx9ASVmUziEFOkUEXqgrDteOEEkmtJ4dGmsYOH2Ft116bHvhPXKgGutBMGpQzbnEOXVfD+T9O6Mzp5tMPT+M+zXa7QV18qkVpcX4ahUoHhFmct0zKIEcQE+sShXf0NiaFcA4vosLQYhnoxWelEF69K2eQfw0XAI3Yvb8xfnNXv8AjNU6Wl0L01ZwsP0YQrEWOX7Hlb4xf0ZEG6ERpojAvhTiKYyRPpQngW5n7G2OKzLE7lLcbkUKlpgMsQsdNBT6dBTQGgeJKMmAGjU1zUojM5a52GN+REYzjLTcGD8clAxlIsdyCKJS1BYbYXJ0pP2JifHJjRdxz7G5DTQDAM1nfAL8xlqPStUJhtn7k3FJL+TuuMVFUYYyAMX9LoBAMPbkgTbVpIK0hOploaTHGOTxzpCzDeKkaA9BMELNswMmcXQosKPoWaj0HuApOIIIRHgGNmU2daLCIZg1Y3nvmIUhw0XgH/4qLW27Eh2CoXNI05px5dQJfgM/MLVXgcvEFqa8Q3SqLhVAEDvyNFY3/h+oLaYqqj6+GOK7AEBS3DHABiYZY098YXQ7Oh1syXaUgAt6rFOxBU4t9jGHBAGNaaDxmGwNQmEsrSQ02AQtLu4Y36uiGQwQKp0G8p6WvcaJ5T1+A3iQ+U+OloEqkkiIQgEJw0OMBbz2NjQOSffsppcgwdMuxMcpioRIDngvZCnpUBYMke2MALBShTBZpYE3Xw+0pr0/RvJSWuRpcsgO9qRrfgO+F/wp67gl5mP9GuHSE4dUAoesqKI3F7ATGo/iP7Mm9QIydX2cBBQORIsLCGRVXQCqR/wqeHDAw+Z59DGylbIGrpYnqS421slX4Cy9MPZU3yOTs43e98x/kz8yoiXPPa4ZOeCZG75GNCQfWE7mntY/kjBhztLueA4UqRVZpo6kkePGgT1km97wfRN/gPk+G1Gx89qXNQdyxFQQQL5FUOuhTbp2iGAtJXO++3tZoMw9vrGS5EfpKAh6WDE+wTLlglq+iqhwgH3Iq3VubiK4LE6qBtyeHEMoATJGJtWCQRowBQKE0sxxgBdz35D2NQliG8qYFJRyLLHzf0yEhy8nIOzlyAACdz3Cixx7QsXyqunjKclov2HrMn+H7ytkpXMeuCoP4QKa9QJz5kmnLDVgtblQ4ZL8FakTXsAAKs53e696Ok43bYSG54jJkzww2ctOD1ZD/K7BJzLic4Ru4nBi07wljvo68xZxFxg1dJokZCURudwqGUdep5TLQyjFrqrlnR0nM34VDIZjx6gY33FjjSFN6wN4+7/wivCPH3AVlrm9pQjZ1pDG9fyHTIX44w9wsykj00H3A6CPtnUf0LIuXbBvzxjkIbNEji1zDCsJ6voOFlUTrs3GcVbadeePMBBolRifH/0Ob1Fd6ji6E68rTw3uznss2zkigcS0Co9LDKjW+gCEw95lJYrZ7iTJV91t3MDFOJzzz6zKsc2ScLOtAz7Kugegbo/5ljDJMZgWcvA1tuSXbNo+W25Vxj0DdvOn0wPm+4HKE+OfI0VzQpG6dDlT87ZLWTZlcBXFwge03UCrxvq51d+yi2AttG2dzON71Cy2S/gGqdj5MZl9+uCluE2LTvkqZ/0S4TsMcHzRhBTfCPiG5sipmObac7I1gU2PUNZChkA+FVdZ0TkQs4BLtlhMRfxGYBVdq6OU6WFsgnjzg5sZmcddj5+KMIGpSlO/Bc0AbXhRNTJ32Pt6ddhM3JPDmL/NJcT8S2dQoSxEmxXnKed3xNzo95jxX2RQihlaK0bFsXHktDe580nM1n2RtVs9Mr0pyhzBcmggSeS+aZTZlJnM9bjXr1tlkdWB71PYpEcGe6vwtlGPqNtEae/X4v0VzGaTl1+5UuoZed2LwnOGUNj0OoAcF2sKd7/+w702CzoStd+cr5iruH3hOfiPDhxP3BWINenxd7oZ1xGjT6yeCsqx1j9PVXkznf8Ejn4lIT20ho0emb2fWCbzh7TweXta9azC/t5pddvvxIvCgYdVDq6HUTR/jJK6gFscXFmJEaFtkyEaiDHd4kLnLuWe17icSZElD+CfTAR2EjSTBaBI4XkvXCaTEzBSrEonoImglOApI6ZngZJjhoetSP7IFJOnIuwoX030RGBUd+zTWDAXhU9a0MRT+/iYwO1VZ9PtwhkNda8bJtOwyIcNkPkTmRe3DML6N57Vjz9hmH4SP9cQwSowLpJlvRN5/9sP/6J1djr/fojNgZHpjOhPKuhycL1NGZ9I36Gosei1jtuNSnW5sY3OhPAO0joPV5szd/fCF7XA9XYpynkiSyt56RsnPdb00FZam00CljPd22Vqz0z1OBtPvBP50Opgvk07TG/ug4dmp+CTnCTIkeHiiFiIdorjDBeko9AXT5ZMxD8b2tSUvnQihIo9wIcxI8h11oifcJE1a0IJsrIMliqLY476IRIU3WTuQOUWIKlDTGmLE7KstBMS8+fmlRm32KJfYU5ky+uYJtFz+xg8jmqjZV+nU6ReMdPomdXK3V4rI4iw+/UQuB7uKuvYbmU2087apIXxq00+4jzWEArTfelZ+L+JRzYYN1iCrMIc1EQxiPJkbUaKKAGNzhPFSSwBaoEaiJvJR1PylInHHkFBjx45+1ja3xaWcT8iHSgo4TJzxh8o67brtDl2IGnYitsGXgOWGnShNkYNJBTvh5XUposHey1fYvRNmXKaEkz1vaJgDx78iGzA3Ryrr+gcrvBXFFpVgscshXlJUxvFgjPm34MXRtpKGu6KtmpZ5HVRlUbSp78qbYg/Xt5Z+OQvDWoyVt+Kc/PmbNVahSxDhFJt8FONDHe1xFmUY+t9wYvfn+C936URbyzISv3C02aeyjcurc6cM4qXYAjoXbl7t1IvFRC2m3qSs20IIEqbYZBhDPx6HbsfjMq4ocFF1Z1J5W+Vjpi5XcHIq51RtBs9u8dk/vAbfe2ij02Md7TIOfpfnJBTBbOap1+RyzXy9a1flqQgeiZQpHM3moQzbXq6kXnZlS1AOiZLzHa/mDc2QrLWXT4xgAfoyVFgUgq7jgxt4XWx600nSbba/wx61erObHAdP6712aW6lcvkN3++G1ipSGQbgLZp2jYZJaE47BOOyNqukQ7P36Z97ALa937L8GCRrMWcfiLdVeeGfjEhWXO1w4NfLbCyUjPZg4/gefgynv5g5GTTnM+WsKwujzfTX8yaPZLoa6xWyr+PV4D/CmTLqzeO8d9kNF0jr62K4u/Tmx2ZZmY8HHnjggQceeOD/HP8DrFDP396ykGoAAAAASUVORK5CYII="
//               alt="Profile"
//             />{" "}
//           </button>
//           {showProfileOptions && (
//             <div className="absolute right-10 mt-1 bg-white border rounded-lg shadow-lg profile-options">
//               {/* Opciones del perfil */}
//               <ul>
//                 <li>
//                   <Link
//                     to="/edit-profile"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
//                   >
//                     Editar Perfil
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => {
//                       logout();
//                       toggleProfileOptions();
//                     }}
//                     className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                   >
//                     Cerrar Sesión
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }

//---------------------------------------------------------------------------------------------
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/authContext";
// import { ButtonLink } from "./ui/ButtonLink";

// import { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faKey, faMessage } from "@fortawesome/free-solid-svg-icons";

// export function Navbar() {
//   const { isAuthenticated, logout, user } = useAuth();
//   console.log(isAuthenticated, user)

//   const [showProfileOptions, setShowProfileOptions] = useState(false); // Nuevo estado

//   const toggleProfileOptions = () => {
//     setShowProfileOptions(!showProfileOptions);
//   };

//   return (
//     <nav className="bg-blue-800 my-1 mx-1 flex justify-between py-5 px-5 rounded-lg">
//       <h1 className="text-4xl font-bold text-[#F2E307]">
//         <Link to={isAuthenticated ? "" : "/"}>UNAH</Link>
//       </h1>

//       <ul className="flex gap-x-2">
//         {true && (
//           <>
//           <li>
//            <button
//              className="h-9 w-9 rounded-full hover:bg-gray-200 overflow-hidden focus:outline-none bg-white"
//            >
//             <img
//                 className="h-full w-full"
//                 src="https://cdn.iconscout.com/icon/free/png-256/free-message-2367724-1976874.png"
//                 alt="Profile"
//               />
//              {/* <FontAwesomeIcon icon={faMessage} size="2x" /> */}
//            </button>
//          </li>
//           <li>
//             <button
//               className="h-9 w-9 rounded-full overflow-hidden focus:outline-none"
//               onClick={toggleProfileOptions}
//             >
//               <img
//                 className="h-full w-full"
//                 src="data:image/png;base64,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"
//                 alt="Profile"
//               />
//             </button>
//             {showProfileOptions && (
//               <div className="absolute right-6 mt-1 bg-white border rounded-lg shadow-lg">
//                 <ul>
//                   <li>
//                     <Link to="/edit-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md">
//                       Editar Perfil
//                     </Link>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => {
//                         logout();
//                         toggleProfileOptions();
//                       }}
//                       className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       Cerrar Sesión
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </li>
//           </>
//         )}
//       </ul>

//     </nav>
//   );
// }
