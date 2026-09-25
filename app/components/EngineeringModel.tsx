import { engineeringLayers } from "@/app/data/site";

export function EngineeringModel() {
  return (
    <div className="engineering-model" aria-label="Dawood Technologies engineering model">
      {engineeringLayers.map((layer, index) => (
        <section className="engineering-layer" key={layer.title}>
          <span className="engineering-layer-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{layer.title}</h3>
          <ul className="engineering-tags">
            {layer.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
