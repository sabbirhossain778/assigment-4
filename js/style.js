function showOnly(id, clickedButton){
  const allJobs = document.getElementById('jobs-card');
  const interviewSection = document.getElementById('interview-section');
  const rejectedSection = document.getElementById('rejected-section');
  //hide all
  allJobs.classList.add('hidden');
  interviewSection.classList.add('hidden');
  rejectedSection.classList.add('hidden');
  //show id wala element
  const selected = document.getElementById(id);
  selected.classList.remove('hidden');

  const buttons = document.querySelectorAll('#btn-options .tab'); 
  for (const btn of buttons) {
        btn.classList.remove('btn-primary', 'tab-active');
    }

  clickedButton.classList.add('btn-primary', 'tab-active');
}
//selected button function
