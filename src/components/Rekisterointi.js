import './Rekisterointi.css';

export default function Rekisterointi() {
    return (
        <div class="form">
        <div class="title">Tervetuloa!</div>
        <div class="subtitle">Rekisteröinti</div>
        <div class="input-container ic1">
          <input id="Nimi" class="input" type="text" placeholder="Käyttäjätunnus " />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">Nimesi</label>
        </div>
        <div class="input-container ic2">
          <input id="Sähköposti" class="input" type="text" placeholder="Sähköposti " />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">Sähköposti</label>
        </div>
        <div class="input-container ic2">
          <input id="Salasana" class="input" type="text" placeholder="Salasana " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Salasana </label>
        </div>
        <button type="text" class="submit">Rekisteröi</button>
      </div>
    )
}