import Table from 'react-bootstrap/Table';
import '../style/App.css'
import Container from 'react-bootstrap/Container';

function Datasheet() {
  /*
  const M = '10"'
  const T = 12
  const SV = "2+"
  const INVU = NONE
  const W = 18
  const LD = "7+"
  const OC = 7
  */
  return (
    <>
      
                            <div class="col-12 col-md-8 mb-4">
                                <div class="bg-dark bg-opacity-75 rounded-lg shadow-2xl p-4 text-white">
                                    <h4 class="mb-3 text-center">Rogal Dorn Battle Tank - LV2</h4>
                                    <div class="table-responsive">
                                        <table class="table table-bordered text-center text-white align-middle">
                                            
                                            <thead class="table-dark">
                                                <tr>
                                                    <td colspan="1">M</td>
                                                    <td colspan="1">T</td>
                                                    <td colspan="1">SV</td>
                                                    <td colspan="2">Invu</td>
                                                    <td colspan="1">W</td>
                                                    <td colspan="2">LD</td>
                                                    <td colspan="1">OC</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>10"</td>
                                                    <td>12</td>
                                                    <td>2+</td>
                                                    <td colspan="2">NONE</td>
                                                    <td>18</td>
                                                    <td colspan="2">7+</td>
                                                    <td>5</td>
                                                </tr>
                                            </tbody>

                                            
                                            <thead class="table-dark">
                                                <tr>
                                                    <th colspan="2">Ranged Weapons</th>
                                                    <th>Range</th>
                                                    <th>A</th>
                                                    <th>BS</th>
                                                    <th>S</th>
                                                    <th>AP</th>
                                                    <th>D</th>
                                                    <th>Habilidades</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2">Castigator Gatling Cannon</td>
                                                    <td>24"</td>
                                                    <td>12</td>
                                                    <td>4+</td>
                                                    <td>5</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                    <td>NONE</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Coaxial Autocannon</td>
                                                    <td>48"</td>
                                                    <td>2</td>
                                                    <td>4+</td>
                                                    <td>9</td>
                                                    <td>-1</td>
                                                    <td>3</td>
                                                    <td>NONE</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Heavy Bolter</td>
                                                    <td>36"</td>
                                                    <td>3</td>
                                                    <td>4+</td>
                                                    <td>5</td>
                                                    <td>-1</td>
                                                    <td>2</td>
                                                    <td>Sustained Hits 1</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Heavy Stubber</td>
                                                    <td>36"</td>
                                                    <td>3</td>
                                                    <td>4+</td>
                                                    <td>4</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                    <td>RAPID FIRE 3</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">MeltaGun</td>
                                                    <td>12"</td>
                                                    <td>1</td>
                                                    <td>4+</td>
                                                    <td>9</td>
                                                    <td>-4</td>
                                                    <td>D6</td>
                                                    <td>Melta 2</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Multi-Melta</td>
                                                    <td>18"</td>
                                                    <td>2</td>
                                                    <td>4+</td>
                                                    <td>9</td>
                                                    <td>-4</td>
                                                    <td>D6</td>
                                                    <td>Melta 2</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Oppressor Cannon</td>
                                                    <td>72"</td>
                                                    <td>D6+3</td>
                                                    <td>4+</td>
                                                    <td>12</td>
                                                    <td>-2</td>
                                                    <td>3</td>
                                                    <td>Blast</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Pulveriser Cannon</td>
                                                    <td>24"</td>
                                                    <td>D6</td>
                                                    <td>4+</td>
                                                    <td>9</td>
                                                    <td>-3</td>
                                                    <td>3</td>
                                                    <td>Blast</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2">Oppressor Cannon</td>
                                                    <td>48"</td>
                                                    <td>D6+3</td>
                                                    <td>4+</td>
                                                    <td>10</td>
                                                    <td>-1</td>
                                                    <td>3</td>
                                                    <td>Blast, Twin-Linked</td>
                                                </tr>
                                            </tbody>

                                            
                                            <thead class="table-dark">
                                                <tr>
                                                    <th colspan="2">Melee Weapons</th>
                                                    <th>Range</th>
                                                    <th>A</th>
                                                    <th>BS</th>
                                                    <th>S</th>
                                                    <th>AP</th>
                                                    <th>D</th>
                                                    <th>Habilidades</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2">Armoured Tracks</td>
                                                    <td>NONE</td>
                                                    <td>6</td>
                                                    <td>4+</td>
                                                    <td>7</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                    <td>NONE</td>
                                                </tr>
                                            </tbody>

                                            
                                            <thead class="table-dark">
                                                <tr>
                                                    <th colspan="3">Habilidades de unidad</th>
                                                    <th colspan="6">Mejoras de Cruzada</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="3"><strong>Ablative Plating:</strong> Once per battle,
                                                        when an attack is allocated to this model, you change the Damage
                                                        characteristic of that attack to 0.</td>
                                                    <td colspan="6"><strong>BT: WELL-DRILLED CREW</strong> Ranged
                                                        weapons equipped by models in this unit have the [assault]
                                                        ability.</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="2" class="text-start"><strong>Faction:</strong> Astra
                                                        Militarum</td>
                                                    <td colspan="7" class="text-start"><strong>Keywords:</strong>
                                                        Imperium, Vehicle, Squadron, Smoke</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        
    </>
  )
}

export default Datasheet
