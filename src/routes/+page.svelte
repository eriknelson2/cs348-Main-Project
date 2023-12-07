<script>
    export let data;

    // Extract documents array from the data
    // @ts-ignore
    const { documents } = data.focusSessions;

    // Assuming documents is an array
    let focusSessions = documents || [];

    // @ts-ignore
    let myModal;
    let session;
    /**
   * @type {{ title: any; type: any; date: any; time: any; duration: any; notes: any; }}
   */
    let currentSession;

  // @ts-ignore
  function showModal(session) {
    currentSession = session;
    // @ts-ignore
    myModal.showModal();
  }

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
      <div class = "flex mt-2">
        <button class="btn btn-primary btn-sm" on:click={() => showModal(session)}>Modify</button>
        <dialog bind:this={myModal} id="my_modal_5" class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Modify Session</h3>
              <p class="py-4">Modify the information of the session below.</p>
              {#if currentSession}
              <form method="POST" action="?/update">
                <input name = "id" type = "hidden" hidden value = {currentSession._id}>
                <div class="form-control overflow-x-auto">
                    <table class="table">
                      <tbody>
                        <tr class="bg-base-200">
                          <th>1</th>
                          <td>Title</td>
                          <td><input type="text" name="title" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" value={currentSession.title}/></td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Type</td>
                          <td><select class="select select-bordered select-sm w-full max-w-xs" name="type" value={currentSession.type}>
                            <option disabled selected>Select</option>
                            <option>Task</option>
                            <option>Event</option>
                            <option>Study</option>
                          </select></td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Date (MM/DD/YYYY)</td>
                          <td><input type="text" name="date" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" value={currentSession.date}/></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Time</td>
                            <td>
                                <select class="select select-bordered select-sm w-full max-w-xs" name="time" value={currentSession.time}>
                                    <option disabled selected>Select</option>
                                    <option>12:00 AM</option>
                                    <option>12:30 AM</option>
                                    <option>1:00 AM</option>
                                    <option>1:30 AM</option>
                                    <option>2:00 AM</option>
                                    <option>2:30 AM</option>
                                    <option>3:00 AM</option>
                                    <option>3:30 AM</option>
                                    <option>4:00 AM</option>
                                    <option>4:30 AM</option>
                                    <option>5:00 AM</option>
                                    <option>5:30 AM</option>
                                    <option>6:00 AM</option>
                                    <option>6:30 AM</option>
                                    <option>7:00 AM</option>
                                    <option>7:30 AM</option>
                                    <option>8:00 AM</option>
                                    <option>8:30 AM</option>
                                    <option>9:00 AM</option>
                                    <option>9:30 AM</option>
                                    <option>10:00 AM</option>
                                    <option>10:30 AM</option>
                                    <option>11:00 AM</option>
                                    <option>11:30 AM</option>
                                    <option>12:00 PM</option>
                                    <option>12:30 PM</option>
                                    <option>1:00 PM</option>
                                    <option>1:30 PM</option>
                                    <option>2:00 PM</option>
                                    <option>2:30 PM</option>
                                    <option>3:00 PM</option>
                                    <option>3:30 PM</option>
                                    <option>4:00 PM</option>
                                    <option>4:30 PM</option>
                                    <option>5:00 PM</option>
                                    <option>5:30 PM</option>
                                    <option>6:00 PM</option>
                                    <option>6:30 PM</option>
                                    <option>7:00 PM</option>
                                    <option>7:30 PM</option>
                                    <option>8:00 PM</option>
                                    <option>8:30 PM</option>
                                    <option>9:00 PM</option>
                                    <option>9:30 PM</option>
                                    <option>10:00 PM</option>
                                    <option>10:30 PM</option>
                                    <option>11:00 PM</option>
                                    <option>11:30 PM</option>
                            </td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Duration (Hours)</td>
                            <td><input type="text" name="duration" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" value={currentSession.duration}/></td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Notes</td>
                            <td>
                                <textarea class="textarea textarea-bordered" name="notes" placeholder="Bio" value={currentSession.notes}></textarea>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
          <div class="form-contorl modal-action">
        
          <button class="btn">Update</button>
           
        </div>
      </form>
      {/if}
      </div>
      </dialog>
      <form method="POST" action = "?/delete">
        <input name = "id" type = "hidden" hidden value = {session._id}>
      <button class = "btn btn-error text-white btn-sm ml-2">Delete</button>
    </form>
      
    </div>
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