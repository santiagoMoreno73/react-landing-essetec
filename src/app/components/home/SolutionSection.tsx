import { FaChartLine } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdCoffee } from "react-icons/md";

export const solutions = [
  {
    id: 0,
    title: "+14",
    subtitle: "Años de experiencia",
    icon: <FaRegThumbsUp className="icons-lg color-success " />,
  },
  {
    id: 1,
    title: "+200",
    subtitle: "Tazas de café",
    icon: <MdCoffee className="icons-lg color-success " />,
  },
  {
    id: 2,
    title: "100%",
    subtitle: "Confiabilidad",
    icon: <FaClipboardCheck className="icons-lg color-success" />,
  },
  {
    id: 3,
    title: "100%",
    subtitle: "Dedicación",
    icon: <FaChartLine className="icons-lg color-success" />,
  },
];

export const SolutionSection = () => {
  return (
    <section className="section bg-primary" id="solutions">
      <div className="container">
        <div className="row" id="counter">
          {solutions.map((solution, index) => (
            <div className="col-sm-6 col-xl-3" key={index}>
              <div className="text-center mt-4">
                {solution.icon}
                <h2 className="counter-value text-white mt-4">
                  <span>{solution.title}</span>
                </h2>
                <p className="font-16 text-white-50">{solution.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
