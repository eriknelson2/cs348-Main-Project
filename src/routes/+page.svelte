<script>
    export let data;

    // Extract documents array from the data
    // @ts-ignore
    const { documents } = data.focusSessions;

    // Assuming documents is an array
    let focusSessions = documents || [];


</script>
<div class = "flex">
<details class="dropdown filterButton dropdown-hover">
    <summary class="m-1 btn">Filter By</summary>
    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a>Date</a></li>
      <li><a>Type</a></li>
      <li><a>Duration</a></li>
    </ul>
  </details>
  <div class = "header">
    Current Focus Sessions
</div>
</div>

  <div class="flex flex-col w-full">
    <div class="divider"></div> 
  </div>


{#each focusSessions as session}
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 displayCards">
  <input type = "checkbox" />
    <div class="collapse-title text-xl font-medium">
      Title: {session.title} &nbsp;
      Type: {session.type} &nbsp; 
      Date: {session.date} &nbsp; 
      Start Time: {session.time} &nbsp; 
      Duration: {session.duration} hour &nbsp; 
    </div>
    <div class="collapse-content"> 
      <p>Notes: {session.notes}</p>
      <form method="POST" action = "?/delete">
        <input name = "id" type = "hidden" hidden value = {session._id}>
      <button class = "btn btn-error text-white btn-xs">Delete</button>
    </form>
    </div>
  </div>
{/each}


<style>
    .filterButton {
        margin-top: 10px;
        margin-left: 30px;
    }
    .displayCards {
        margin-bottom: 10px;
    }
    .header {
        margin-top: 10px;
        margin-bottom: 10px;
        color: black;
        font-size: 2em;
        font-family: 'Roboto', sans-serif;;
        font-weight: 'bold';
        margin-left: 450px;
    }

</style>