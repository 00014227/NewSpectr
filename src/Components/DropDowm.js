import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import menu from '../assets/navbar/MENU.svg'

const DropDowm = ({getColorClass1, getColorClass2, getColorClass3, getColorClass4, getColorClass5}) => {
    const [open1, setopen1] = useState(false);

    return (

        <motion.div animate={open1 ? "open1" : "closed"} className={`lg:hidden [w-5rem] ${open1 ? 'h-[25rem]' : 'h-[5rem]'} `}>
            <button
                onClick={() => setopen1((pv) => !pv)}
                className=" text-[36px] lg:hidden flex items-center gap-4 text-white transition-colors"
            >
                <span className="font-medium ">Услуги</span>
                <motion.span variants={iconVariants}>

                    <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2" height="16" transform="matrix(-0.711066 -0.703125 0.711066 -0.703125 1.42188 13.4795)" fill="white" />
                        <rect width="2" height="16" transform="matrix(0.711066 -0.703125 -0.711066 -0.703125 21.3398 13.4717)" fill="white" />
                    </svg>

                </motion.span>
            </button>
            <motion.ul
                initial={wrapperVariants.closed}
                variants={wrapperVariants}
                style={{ originY: "top", translateX: "-50%" }}
                className="flex flex-col gap-2 p-2 rounded-lg  shadow-xl justify-center items-center ml-40  overflow-hidden"
            >
                

                <Link to="../services/marketing">

                    <Option setopen1={setopen1} text="Маркетинг" className='text-white' />

                </Link>

                <Link to="../services/web">

                    <Option setopen1={setopen1} text="Вебсайты" />

                </Link>

                <Link to="../services/smm">


                    <Option setopen1={setopen1} text="SMM" />                </Link>
                

                <Link to="../services/branding">

                    <Option setopen1={setopen1} text="Брендинг" />
                </Link>

                <Link to="../services/production">
                    <Option setopen1={setopen1} text="Продакшн" />


                </Link>

            </motion.ul>
        </motion.div>

    );
};

const Option = ({ text, Icon, setopen1 }) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setopen1(false)}
            className="text-[36px] hover:text-teal-500  font-bold mx-auto capitalize font_border  transition-colors cursor-pointer"
        >
            <motion.span variants={actionIconVariants}>
                {/* <Icon /> */}
            </motion.span>
            <span>{text}</span>
        </motion.li>
    );
};

export default DropDowm;

const wrapperVariants = {
    open1: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open1: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open1: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open1: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};