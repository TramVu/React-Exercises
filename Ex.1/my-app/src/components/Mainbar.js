import React from "react";
import "./css/Mainbar.css";
import pictures from "./pictures/blank-rows-img.jpg";

const Mainbar = () => {
    return (
        <div className="mainbar">
            <div id="bodyLeft">
                <div className="title1">Koronavirus</div>
                <div className="Pic1">
                    <img src={pictures} alt="pic1"></img>
                </div>
                <div className="subTitle">HS seuraa</div>
                <div className="title2">
                    <p>
                        <a href="header">Lorem Ipsum |</a> STM: Nulla eget libero sit amet
                        nisl luctus luctus. Phasellus varius odio nec risus pulvinar, eu
                        lacinia velit faucibus.
                    </p>
                </div>
                <div className="tableName">Koronaviruksen vaikutukset Suomessa</div>
                <div id="chart">
                    <table>
                        <thead>
                            <tr>
                                <th>Tartunnat</th>
                                <th>Tuoreimmat</th>
                                <th>Edeltavat</th>
                            </tr>
                            <tr>
                                <th>yhteensa</th>
                                <th>14paivaa</th>
                                <th>14paivaa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>7776</td>
                                <td>293</td>
                                <td>132</td>
                            </tr>
                            <tr>
                                <td><hr /></td>
                                <td><hr /></td>
                                <td><hr /></td>
                            </tr>
                            <tr>
                                <td id="Single">Kuolleet</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>334</td>
                                <td>5</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><hr /></td>         {/*making lines*/}
                                <td><hr /></td>         {/*making lines*/}
                                <td><hr /></td>         {/*making lines*/}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="Pic2">
                    <img src={pictures} alt="pic2"></img>
                </div>
            </div>

            <div id="bodyRight">
                <div className="rightName">Luetuimmat</div>
                <div><hr /></div>
                <div id="rightTable">
                    <table>
                        <tbody>
                            <tr>
                                <td className="orderNumber">1</td>
                                <td>
                                        <a href="newsTitle">Riikosepailyt |</a> Aenean feugiat nisl
                                        nec neque condimentum, sit amet condimentum nulla gravida.
                                        Fusce hendrerit ipsum eleifend fermentum molestie. 
                                </td>
                            </tr>
                            <tr>
                                <td><hr /></td>
                                <td><hr /></td>
                            </tr>
                            <tr>
                                <td className="orderNumber">2</td>
                                <td>
                                    <a href="newsTitle">HS Vantaa |</a> Phasellus varius odio nec risus pulvinar, eu lacinia velit faucibus. Nullam tincidunt, est eget varius dignissim, lectus tortor maximus arcu, sed ullamcorper purus sem et ligula.
                                </td>
                            </tr>
                            <tr>
                                <td><hr /></td>
                                <td><hr /></td>
                            </tr>
                            <tr>
                                <td className="orderNumber">3</td>
                                <td>
                                    <a href="newsTitle">Paivittyva seuranta |</a> Sed tincidunt et nisl finibus tincidunt. Aliquam vulputate dui quis finibus scelerisque. Phasellus eget dolor ut lorem vehicula convallis. Aliquam nec egestas sapien.
                                </td>
                            </tr>
                            <tr>
                                <td><hr /></td>
                                <td><hr /></td>
                            </tr>
                            <tr>
                                <td className="orderNumber">4</td>
                                <td>
                                    <a href="newsTitle">Nyt.fi |</a> In hac habitasse platea dictumst. Mauris tincidunt augue urna, vitae condimentum libero accumsan sed. Nullam in bibendum nulla. Pellentesque at tellus pretium, semper leo eget, varius dolor. Maecenas vulputate id dolor eget imperdiet.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default Mainbar;
