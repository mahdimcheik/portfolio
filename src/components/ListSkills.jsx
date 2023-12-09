import TopDownCard from "./TopDownCard";
import "./ListSkills.css";

export default function ListSkills({ skills }) {
  return (
    <div className="ListSkills">
      {skills.map((ele) => {
        return (
          <TopDownCard
            key={ele.id}
            title={ele.title}
            description={ele.description}
            imgUrl={ele.imgUrl ?? "http://via.placeholder.com/360x360"}
          />
        );
      })}
    </div>
  );
}
