import React from "react"
import "../App.css";

export default function Hematologia(){
    return(
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="red" className="icon">
<path d="M44.732 4.73201L43.732 3.00001C43.4668 2.54066 43.0299 2.20548 42.5176 2.06821C42.0053 1.93093 41.4594 2.0028 41 2.26801L39.978 2.85701C39.51 2.45167 38.9271 2.20265 38.3107 2.14474C37.6944 2.08683 37.0753 2.22292 36.54 2.53401L21.573 11.175C21.2707 10.9993 20.9274 10.9064 20.5777 10.9055C20.228 10.9046 19.8842 10.9958 19.581 11.17L18.714 11.67C18.2551 11.9354 17.9203 12.3721 17.7833 12.8842C17.6462 13.3963 17.718 13.9419 17.983 14.401L21.983 21.328C22.1142 21.5557 22.2889 21.7554 22.4973 21.9156C22.7057 22.0757 22.9436 22.1933 23.1974 22.2614C23.4512 22.3296 23.716 22.3471 23.9765 22.3129C24.2371 22.2786 24.4884 22.1934 24.716 22.062L25.582 21.562C25.8833 21.3859 26.1333 21.1341 26.3072 20.8315C26.481 20.5288 26.5727 20.186 26.573 19.837L32.236 16.571C32.5175 16.7136 32.8149 16.8223 33.122 16.895C34.3484 18.6945 35.0029 20.8223 35 23C34.9943 25.7506 33.9591 28.3995 32.0981 30.425C30.2372 32.4505 27.6853 33.7059 24.945 33.944C24.3301 33.7142 23.6525 33.7164 23.039 33.95C21.3795 33.8063 19.7748 33.2857 18.347 32.4279C16.9192 31.5701 15.7061 30.3977 14.8 29H17C17.5304 29 18.0391 28.7893 18.4142 28.4142C18.7893 28.0391 19 27.5304 19 27V26C19 25.4696 18.7893 24.9609 18.4142 24.5858C18.0391 24.2107 17.5304 24 17 24H5C4.46957 24 3.96086 24.2107 3.58579 24.5858C3.21071 24.9609 3 25.4696 3 26V27C3 27.5304 3.21071 28.0391 3.58579 28.4142C3.96086 28.7893 4.46957 29 5 29H8.111C9.02817 31.4089 10.4781 33.5793 12.3523 35.3489C14.2264 37.1185 16.4764 38.4415 18.934 39.219L18.445 40H12C10.9391 40 9.92172 40.4214 9.17157 41.1716C8.42143 41.9217 8 42.9391 8 44C8 44.5304 8.21071 45.0391 8.58579 45.4142C8.96086 45.7893 9.46957 46 10 46H38C38.5304 46 39.0391 45.7893 39.4142 45.4142C39.7893 45.0391 40 44.5304 40 44C40 42.9391 39.5786 41.9217 38.8284 41.1716C38.0783 40.4214 37.0609 40 36 40H29.555L29.063 39.214C32.5121 38.1217 35.5258 35.9636 37.6708 33.0501C39.8158 30.1366 40.9814 26.6179 41 23C41.0062 19.5446 39.9467 16.1714 37.966 13.34C37.966 13.31 37.973 13.281 37.975 13.251L41.541 11.2C42.0775 10.8913 42.5043 10.4228 42.7619 9.85993C43.0195 9.29707 43.095 8.66785 42.978 8.06001L44 7.46501C44.4586 7.19884 44.7931 6.76184 44.9303 6.24964C45.0675 5.73745 44.9962 5.19176 44.732 4.73201V4.73201ZM23.716 20.33L19.716 13.402L20.582 12.902L24.582 19.83L23.716 20.33ZM34 15C33.6044 15 33.2178 14.8827 32.8889 14.6629C32.56 14.4432 32.3036 14.1308 32.1522 13.7654C32.0009 13.3999 31.9613 12.9978 32.0384 12.6098C32.1156 12.2219 32.3061 11.8655 32.5858 11.5858C32.8655 11.3061 33.2219 11.1156 33.6098 11.0384C33.9978 10.9613 34.3999 11.0009 34.7654 11.1522C35.1308 11.3036 35.4432 11.56 35.6629 11.8889C35.8827 12.2178 36 12.6044 36 13C36 13.5304 35.7893 14.0391 35.4142 14.4142C35.0391 14.7893 34.5304 15 34 15ZM5 26H17V27H5V26ZM10.27 29H12.481C13.3504 30.6782 14.5764 32.1459 16.0731 33.3C17.5698 34.4541 19.3009 35.2668 21.145 35.681L20.034 37.459C17.8818 36.8598 15.8895 35.7901 14.2009 34.3273C12.5124 32.8644 11.1698 31.0449 10.27 29V29ZM36 42C36.5304 42 37.0391 42.2107 37.4142 42.5858C37.7893 42.9609 38 43.4696 38 44H10C10 43.4696 10.2107 42.9609 10.5858 42.5858C10.9609 42.2107 11.4696 42 12 42H19C19.1696 42 19.3364 41.9569 19.4848 41.8747C19.6331 41.7924 19.7581 41.6738 19.848 41.53L23.148 36.243C23.2377 36.0983 23.3628 35.9789 23.5116 35.8961C23.6603 35.8133 23.8278 35.7698 23.998 35.7698C24.1682 35.7698 24.3357 35.8133 24.4844 35.8961C24.6332 35.9789 24.7583 36.0983 24.848 36.243L28.148 41.529C28.2381 41.6736 28.3637 41.7928 28.5128 41.8752C28.6619 41.9576 28.8296 42.0006 29 42H36ZM39 23C38.9819 26.2812 37.8936 29.4669 35.9003 32.0734C33.9071 34.6799 31.1178 36.5648 27.956 37.442L26.845 35.665C29.7217 35.0159 32.2929 33.4095 34.1377 31.1087C35.9825 28.8079 36.9917 25.9491 37 23C37.0019 20.8092 36.4417 18.6545 35.373 16.742C36.0125 16.5054 36.5806 16.1088 37.023 15.59C38.3216 17.8434 39.0035 20.3992 39 23V23ZM41 8.85601C40.967 8.98274 40.9093 9.10171 40.8302 9.20605C40.7511 9.3104 40.6521 9.39806 40.539 9.46401L37.547 11.19C37.3016 10.7068 36.9603 10.2787 36.544 9.93177C36.1276 9.58486 35.6449 9.32645 35.1254 9.17233C34.6058 9.0182 34.0603 8.97158 33.5221 9.03532C32.984 9.09906 32.4644 9.27182 31.9952 9.54305C31.5261 9.81428 31.1171 10.1783 30.7933 10.6129C30.4695 11.0474 30.2377 11.5434 30.112 12.0706C29.9862 12.5977 29.9693 13.145 30.0622 13.6789C30.155 14.2128 30.3557 14.7222 30.652 15.176L25.814 17.966L22.814 12.766L37.543 4.26601C37.7719 4.13473 38.0433 4.09923 38.2983 4.16722C38.5532 4.23521 38.7709 4.4012 38.904 4.62901L40.904 8.10201C40.9691 8.21508 41.0111 8.33995 41.0276 8.46938C41.0441 8.59881 41.0347 8.73023 41 8.85601V8.85601ZM42.133 6.23201L41.133 4.49901L42 4.00001L43 5.73201L42.133 6.23201Z" fill="black"/>
<path d="M24 40C24.5523 40 25 39.5523 25 39C25 38.4477 24.5523 38 24 38C23.4477 38 23 38.4477 23 39C23 39.5523 23.4477 40 24 40Z" fill="black"/>
</svg>
        </div>
    )
}