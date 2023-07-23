function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('unit').value;
  let result;

  if (isNaN(temperature)) {
      document.getElementById('result').textContent = 'Please enter a valid temperature.';
      return;
  }

  if (unit === 'C') {
      result = {
          F: temperature * 9 / 5 + 32,
          K: temperature + 273.15
      };
  } else if (unit === 'F') {
      result = {
          C: (temperature - 32) * 5 / 9,
          K: (temperature - 32) * 5 / 9 + 273.15
      };
  } else if (unit === 'K') {
      result = {
          C: temperature - 273.15,
          F: (temperature - 273.15) * 9 / 5 + 32
      };
  }

  let output = 'Converted temperatures: ';
  for (const key in result) {
      if (result.hasOwnProperty(key)) {
          output += `${key}: ${result[key].toFixed(2)}° `;
      }
  }

  document.getElementById('result').textContent = output;
}
