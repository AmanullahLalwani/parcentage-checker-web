function calculatePercentage() {
    const obtainedMarks = document.getElementById('obtainedMarks').value;
    const totalMarks = document.getElementById('totalMarks').value;
    
    if (obtainedMarks === "" || totalMarks === "" || obtainedMarks < 0 || totalMarks <= 0) {
        document.getElementById('result').innerText = "Please enter valid marks.";
        return;
    }
    
    const percentage = (obtainedMarks / totalMarks) * 100;
    document.getElementById('result').innerText = `Percentage: ${percentage.toFixed(2)}%`;
}