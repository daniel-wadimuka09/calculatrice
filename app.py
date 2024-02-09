from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculator', methods=['POST'])
def calculate():
    expression = request.form['expression']
    try:
        result = eval(expression)
        return render_template('calculator.html', result=result, expression=expression)
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
