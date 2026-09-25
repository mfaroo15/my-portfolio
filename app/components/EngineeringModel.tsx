import { engineeringLayers } from "@/app/data/site";

export function EngineeringModel() {
  return (
    <div className="engineering-model" aria-label="Dawood Technologies engineering model">
      {engineeringLayers.map((layer, index) => (
        <section className="engineering-layer" key={layer.title}>
          <div className="engineering-layer-heading">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{layer.title}</h3>
          </div>
          <ul>
            {layer.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
