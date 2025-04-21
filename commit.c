#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // for sleep()

void commitChanges() {
    // Define the Git commands
    const char* addCommand = "git add .";
    const char* commitCommand = "git commit -m \"Automated commit\"";

    // Execute Git commands
    system(addCommand);
    system(commitCommand);
}

int main() {
    while (1) { // Infinite loop to repeatedly commit
        commitChanges();
        sleep(600); // Wait for 10 minutes (600 seconds)
    }

    return 0;
}
