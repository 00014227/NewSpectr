
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import menu from '../assets/navbar/MENU.svg'

const DropDowm = () => {
    const [open, setOpen] = useState(false);

    return (

        <motion.div animate={open ? "open" : "closed"} className="lg:hidden">
            <button
                onClick={() => setOpen((pv) => !pv)}
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
                <Link to="../services/smm">


                    <Option setOpen={setOpen} text="SMM" />                </Link>
                <Link to="../services/web">

                    <Option setOpen={setOpen} text="Вебсайты" />

                </Link>

                <Link to="../services/branding">

                    <Option setOpen={setOpen} text="Брендинг" />
                </Link>

                <Link to="../services/marketing">

                    <Option setOpen={setOpen} text="Маркетинг" />

                </Link>

                <Link to="../services/production">
                    <Option setOpen={setOpen} text="Продакшн" />


                </Link>

            </motion.ul>
        </motion.div>

    );
};

const Option = ({ text, Icon, setOpen }) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="text-[36px] hover:text-teal-500  font-bold mx-auto capitalize font_border text-teal-500 transition-colors cursor-pointer"
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
    open: {
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
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
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
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};