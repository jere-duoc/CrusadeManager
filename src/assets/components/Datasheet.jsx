import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Collapse,
  Form,
  InputGroup,
} from "react-bootstrap";
import data from "../data/Imperium - Astra Militarum - Library.json";

const STORAGE_KEY = "army_roster";

const saveToStorage = (army) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(army));
};

const loadFromStorage = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

const exportJSON = (army) => {
  const blob = new Blob([JSON.stringify(army, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mi_ejercito.json";
  a.click();
  URL.revokeObjectURL(url);
};

const EditableUnitCard = ({ unit, index, onChange, onRemove, onSave }) => {
  const [open, setOpen] = useState(false);

  const handleStatChange = (key, value) => {
    const updatedStats = { ...unit.stats, [key]: value };
    onChange(index, { ...unit, stats: updatedStats });
  };

  const handleModifierChange = (key, value) => {
    const updatedMods = { ...unit.modifiers, [key]: value };
    onChange(index, { ...unit, modifiers: updatedMods });
  };

  const handlePointsChange = (value) => {
    onChange(index, { ...unit, points: Number(value) || 0 });
  };

  const getTotalStat = (stat) => {
    const base = parseFloat(unit.stats[stat]) || 0;
    const mod = parseFloat(unit.modifiers?.[stat]) || 0;
    return base + mod;
  };

  return (
    <Card
      className="mb-3 shadow-sm bg-dark text-light border-secondary"
      style={{ backgroundColor: "rgba(33,33,33,0.6)" }}
    >
      <Card.Header
        onClick={() => setOpen(!open)}
        aria-controls={`unit-${index}`}
        aria-expanded={open}
        style={{ cursor: "pointer" }}
        className="d-flex justify-content-between align-items-center bg-secondary text-white"
      >
        <span>
          <strong>{unit.name}</strong> — {unit.points ?? 0} pts
        </span>
        <Button
          variant="outline-light"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(index);
          }}
        >
          ✖
        </Button>
      </Card.Header>

      <Collapse in={open}>
        <div id={`unit-${index}`}>
          <Card.Body>
            <h6>Estadísticas y Modificadores</h6>
            <Form>
              <Row>
                {Object.entries(unit.stats).map(([stat, value], i) => (
                  <Col xs={6} md={3} key={i} className="mb-2">
                    <Form.Group>
                      <Form.Label>{stat}</Form.Label>
                      <Form.Control
                        type="text"
                        value={value}
                        onChange={(e) => handleStatChange(stat, e.target.value)}
                        className="bg-dark text-light border-secondary"
                      />
                      <Form.Text className="text-muted">
                        Total: {getTotalStat(stat)}
                      </Form.Text>
                      <Form.Control
                        type="number"
                        placeholder="Modificador"
                        value={unit.modifiers?.[stat] ?? 0}
                        onChange={(e) =>
                          handleModifierChange(stat, e.target.value)
                        }
                        className="bg-secondary text-light mt-1"
                      />
                    </Form.Group>
                  </Col>
                ))}
                <Col xs={6} md={3} className="mb-2">
                  <Form.Group>
                    <Form.Label>Puntos</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      value={unit.points ?? 0}
                      onChange={(e) => handlePointsChange(e.target.value)}
                      className="bg-dark text-light border-secondary"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            <Button
              variant="success"
              size="sm"
              className="mt-3"
              onClick={() => onSave(index)}
            >
              💾 Guardar cambios
            </Button>

            {unit.rangedWeapons.length > 0 && (
              <>
                <h6 className="mt-4">Armas a Rango</h6>
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  variant="dark"
                  className="border-secondary"
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Range</th>
                      <th>A</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unit.rangedWeapons.map((w, i) => (
                      <tr key={i}>
                        <td>{w.name}</td>
                        <td>{w.characteristics["Range"]}</td>
                        <td>{w.characteristics["A"]}</td>
                        <td>{w.characteristics["BS"]}</td>
                        <td>{w.characteristics["S"]}</td>
                        <td>{w.characteristics["AP"]}</td>
                        <td>{w.characteristics["D"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}

            {unit.meleeWeapons.length > 0 && (
              <>
                <h6 className="mt-4">Armas de Combate</h6>
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  variant="dark"
                  className="border-secondary"
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Range</th>
                      <th>A</th>
                      <th>WS</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unit.meleeWeapons.map((w, i) => (
                      <tr key={i}>
                        <td>{w.name}</td>
                        <td>{w.characteristics["Range"]}</td>
                        <td>{w.characteristics["A"]}</td>
                        <td>{w.characteristics["WS"]}</td>
                        <td>{w.characteristics["S"]}</td>
                        <td>{w.characteristics["AP"]}</td>
                        <td>{w.characteristics["D"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            )}
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

const UnitCatalogue = ({ onAddUnit }) => {
  const [units, setUnits] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const entries = data.catalogue.sharedSelectionEntries.selectionEntry;
    const parsed = entries.map((entry) => {
      const name = entry["@name"];
      const profiles = entry.profiles?.profile || [];
      const profileList = Array.isArray(profiles) ? profiles : [profiles];

      const unitProfile = profileList.find((p) => p["@typeName"] === "Unit");
      const stats = {};
      if (unitProfile?.characteristics?.characteristic) {
        unitProfile.characteristics.characteristic.forEach((c) => {
          stats[c["@name"]] = c["#text"];
        });
      }

      const rangedWeapons = [];
      const meleeWeapons = [];
      let points = 0;

      profileList.forEach((p) => {
        if (p["@typeName"]?.includes("Weapons")) {
          const weapon = { name: p["@name"], characteristics: {} };
          p.characteristics.characteristic.forEach((c) => {
            weapon.characteristics[c["@name"]] = c["#text"];
          });
          if (p["@typeName"].includes("Melee")) meleeWeapons.push(weapon);
          else rangedWeapons.push(weapon);
        }
        if (p["@name"]?.toLowerCase().includes("points")) {
          const val = parseInt(p.characteristics.characteristic?.[0]?.["#text"]);
          if (!isNaN(val)) points = val;
        }
      });

      return { name, stats, rangedWeapons, meleeWeapons, points, modifiers: {} };
    });

    setUnits(parsed.filter((u) => Object.keys(u.stats).length > 0));
  }, []);

  const filteredUnits = units.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h4 className="mb-3 text-light">Catálogo</h4>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar unidad..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-dark text-light border-secondary"
        />
      </InputGroup>

      <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
        {filteredUnits.map((unit, idx) => (
          <Card
            key={idx}
            className="mb-2 text-center bg-dark text-light border-secondary shadow-sm"
            style={{ cursor: "pointer" }}
            onClick={() => onAddUnit(unit)}
          >
            <Card.Body>
              <Card.Title>{unit.name}</Card.Title>
              <Card.Text style={{ fontSize: "0.85rem" }}>
                {Object.entries(unit.stats)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(" | ")}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

const ArmyBuilder = () => {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    setArmy(loadFromStorage());
  }, []);

  const addUnit = (unit) => {
    const updated = [...army, { ...unit }];
    setArmy(updated);
    saveToStorage(updated);
  };

  const updateUnit = (index, updatedUnit) => {
    const newArmy = [...army];
    newArmy[index] = updatedUnit;
    setArmy(newArmy);
  };

  const saveUnit = (index) => {
    const newArmy = [...army];
    newArmy[index].lastSaved = new Date().toISOString();
    setArmy(newArmy);
    saveToStorage(newArmy);
  };

  const removeUnit = (index) => {
    const newArmy = [...army];
    newArmy.splice(index, 1);
    setArmy(newArmy);
    saveToStorage(newArmy);
  };

  const totalPoints = army.reduce(
    (sum, u) => sum + (Number(u.points) || 0),
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "white",
        backdropFilter: "blur(3px)",
        paddingTop: "1rem",
      }}
    ><br /><br />
      <Container fluid>
        <Row>
          
          <Col md={4} className="border-end border-secondary">
            <UnitCatalogue onAddUnit={addUnit} />
          </Col>

          
          <Col md={8}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Mi Lista de Ejército</h4>
              <div>
                <Button
                  variant="outline-info"
                  size="sm"
                  className="me-2"
                  onClick={() => exportJSON(army)}
                >
                  Exportar JSON
                </Button>
                <h5 className="d-inline text-info">
                  Total: {totalPoints} pts
                </h5>
              </div>
            </div>

            {army.length === 0 ? (
              <p className="text-muted">Aún no has agregado unidades.</p>
            ) : (
              army.map((unit, index) => (
                <EditableUnitCard
                  key={index}
                  index={index}
                  unit={unit}
                  onChange={updateUnit}
                  onRemove={removeUnit}
                  onSave={saveUnit}
                />
              ))
            )}
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default ArmyBuilder;
