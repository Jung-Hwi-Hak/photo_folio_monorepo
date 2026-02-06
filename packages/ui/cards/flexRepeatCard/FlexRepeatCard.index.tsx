import Image from "next/image";
import { motion } from "framer-motion";

interface FlexRepeatCardType {
  id: number; // 카드 번호
  title: string; // 카드 제목
  imgSrc: string;
  clickFnc?: (p: { id: number }) => void;
}

export default function FlexRepeatCard(props: FlexRepeatCardType) {
  return (
    <div className="relative h-[30vh] max-screen1280:h-[50vh] max-screen960:h-[70vh] max-screenMob:h-[30vh]">
      <div className="flex items-center text-mainText border-t border-gray1 h-15">
        <span className="text-pointText  font-bold">{props.id}</span>
        <span className="text-mainText ml-5 font-bold">{props.title}</span>
      </div>
      <motion.div
        className="flex rounded justify-center items-end cursor-pointer bg-subBg h-full"
        onClick={() => props.clickFnc({ id: props.id })}
        whileHover={{
          scale: 1.05,
          backgroundColor: "var(--bg-sub-hover-color)", // 색상 변경도 부드럽게 하고 싶을 때
        }}
        transition={{
          type: "spring",
          stiffness: 400, // 강성 (높을수록 빨리 반응)
          damping: 25, // 반동 (낮을수록 많이 흔들림)
        }}
      >
        <div className="relative h-[90%] w-[73%]">
          <Image src={`/img/${props.imgSrc}`} alt="포토폴리오" fill />
        </div>
      </motion.div>
    </div>
  );
}
