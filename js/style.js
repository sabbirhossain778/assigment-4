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

// ৩. বাটন হাইলাইট করার আসল লজিক (এখানেই ম্যাজিক)
  // প্রথমে সব বাটন থেকে নীল কালার (btn-primary) সরিয়ে নিন
  const buttons = document.querySelectorAll('#btn-options .tab'); 
  buttons.forEach(btn => {
    btn.classList.remove('btn-primary', 'tab-active');
  });

  // এখন শুধুমাত্র যে বাটনটি ক্লিক করেছেন (clickedButton) সেটিকে নীল করুন
  clickedButton.classList.add('btn-primary', 'tab-active');
}
//selected button function
