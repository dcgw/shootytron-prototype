/** Interface for a clock function that returns a continuously updating 
 * count of milliseconds since some arbitrary epoch.
 *
 * The clock should be continuous and consistent, but need not be in any
 * particular time zone or relative to any particular epoch.
 *
 * Date.now is suitable for use as an implementation of this interface. */
export interface Clock {
    (): number;
}