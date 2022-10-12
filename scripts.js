function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }


    //fluxo ideal, F -> C
    let updatedDegree;
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    return formula(updatedDegree) + 'C'

}

try {
    transformDegree('50F')
    transformDegree('50Z')

    
} catch (error) {
    console.log(error) 
}