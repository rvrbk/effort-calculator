const spTotal = 144;
const spPerOpenIssue = 3;
const spPerProgressIssue = 1;

const pctRoadmap = 60;
const pctRequests = 20;
const pctTechnicalDebt = 10;
const pctCustomAdjustments = 10;

document.querySelectorAll('*[name=open], *[name=progress]').forEach(e => {
    e.onchange = e => {
        calculate();
    }
});

calculate();

function calculate() {
    const spToUse = spTotal - ((document.querySelector('*[name=open]').value * spPerOpenIssue) + (document.querySelector('*[name=progress]').value * spPerProgressIssue));
    
    const spRoadmap = Math.round(((spToUse * (pctRoadmap / 100)) / spToUse) * spToUse);
    const spRequests = Math.round(((spToUse * (pctRequests / 100)) / spToUse) * spToUse);
    const spTechnicalDebt = Math.round(((spToUse * (pctTechnicalDebt / 100)) / spToUse) * spToUse);
    const spCustomAdjustments = Math.round(((spToUse * (pctCustomAdjustments / 100)) / spToUse) * spToUse);

    document.querySelector('#roadmap').innerHTML = spRoadmap;
    document.querySelector('#requests').innerHTML = spRequests;
    document.querySelector('#technicaldebt').innerHTML = spTechnicalDebt;
    document.querySelector('#customadjustments').innerHTML = spCustomAdjustments;
    document.querySelector('#total').innerHTML = spRoadmap + spRequests + spTechnicalDebt + spCustomAdjustments;
}