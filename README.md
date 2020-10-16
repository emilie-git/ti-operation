# operation-multiplication

Test Tylia Invest

## Heroku

### Endpoint /multiplication

With this endpoint, you can multiply as many numbers as you want.

To use the endpoint, you indicate the first value "p1=" followed by your number, then the second value "p2=" followed by your number, etc.
Key names of parameters can be changed, but not deleted.

Example with 5x10: [https://ti-operation.herokuapp.com/multiplication?p1=5&p2=10](https://ti-operation.herokuapp.com/multiplication?p1=5&p2=10)

The return value will be in the form :
{
    "values": [
        "5",
        " 10"
    ],
    "total: 50
}

With the values to be multiplied and the total of the multiplication.

The possible errors are :

- 400 with the message 'Please put number in url.' if no number is given.

- 400 with the message 'Put only numbers in url parameters.' if you have given letters or symbols instead of numbers.

## Github

Repository: [https://github.com/emilie-git/operation](https://github.com/emilie-git/operation)


## Version

Nodejs : v12.16.2