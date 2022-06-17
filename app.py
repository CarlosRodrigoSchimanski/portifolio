from flask import Flask, render_template

#teste a

app = Flask(__name__)

@app.route('/')
def hospedagem():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()