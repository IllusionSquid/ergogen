// EC11 rotary encoder
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (for rotary)
//    B: corresponds to pin 2 (for rotary, should be GND)
//    C: corresponds to pin 3 (for rotary)
const offset = [4.98, -8.178]
module.exports = {
    nets: {
        from: undefined,
        to: undefined,
        A: undefined,
        B: undefined,
        C: undefined
    },
    params: {
        class: 'ROT'
    },
    body: p => `
        (module rotary_encoder (layer F.Cu) (tedit 603326DE)

            ${p.at /* parametric position */}
        
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0.5) (layer F.SilkS) 
                ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "" (at 0 8.89) (layer F.Fab)
                (effects (font (size 1 1) (thickness 0.15))))

            ${''/* component outline */}
            
            (fp_line (start -0.62 -0.04) (end 0.38 -0.04) (layer Dwgs.User) (width 0.12))
            (fp_line (start -0.12 -0.54) (end -0.12 0.46) (layer Dwgs.User) (width 0.12))
            (fp_line (start 5.98 3.26) (end 5.98 5.86) (layer Dwgs.User) (width 0.12))
            (fp_line (start 5.98 -1.34) (end 5.98 1.26) (layer Dwgs.User) (width 0.12))
            (fp_line (start 5.98 -5.94) (end 5.98 -3.34) (layer Dwgs.User) (width 0.12))
            (fp_line (start -3.12 -0.04) (end 2.88 -0.04) (layer F.Fab) (width 0.12))
            (fp_line (start -0.12 -3.04) (end -0.12 2.96) (layer F.Fab) (width 0.12))
            (fp_line (start -7.32 -4.14) (end -7.62 -3.84) (layer F.SilkS) (width 0.12))
            (fp_line (start -7.92 -4.14) (end -7.32 -4.14) (layer F.SilkS) (width 0.12))
            (fp_line (start -7.62 -3.84) (end -7.92 -4.14) (layer F.SilkS) (width 0.12))
            (fp_line (start -6.22 -5.84) (end -6.22 5.86) (layer Dwgs.User) (width 0.12))
            (fp_line (start -2.12 -5.84) (end -6.22 -5.84) (layer Dwgs.User) (width 0.12))
            (fp_line (start -2.12 5.86) (end -6.22 5.86) (layer Dwgs.User) (width 0.12))
            (fp_line (start 5.98 5.86) (end 1.88 5.86) (layer Dwgs.User) (width 0.12))
            (fp_line (start 1.88 -5.94) (end 5.98 -5.94) (layer Dwgs.User) (width 0.12))
            (fp_line (start -6.12 -4.74) (end -5.12 -5.84) (layer F.Fab) (width 0.12))
            (fp_line (start -6.12 5.76) (end -6.12 -4.74) (layer F.Fab) (width 0.12))
            (fp_line (start 5.88 5.76) (end -6.12 5.76) (layer F.Fab) (width 0.12))
            (fp_line (start 5.88 -5.84) (end 5.88 5.76) (layer F.Fab) (width 0.12))
            (fp_line (start -5.12 -5.84) (end 5.88 -5.84) (layer F.Fab) (width 0.12))
            (fp_line (start -8.87 -6.89) (end 7.88 -6.89) (layer F.CrtYd) (width 0.05))
            (fp_line (start -8.87 -6.89) (end -8.87 6.81) (layer F.CrtYd) (width 0.05))
            (fp_line (start 7.88 6.81) (end 7.88 -6.89) (layer F.CrtYd) (width 0.05))
            (fp_line (start 7.88 6.81) (end -8.87 6.81) (layer F.CrtYd) (width 0.05))
            (fp_circle (center -0.12 -0.04) (end 2.88 -0.04) (layer Dwgs.User) (width 0.12))
            (fp_circle (center -0.12 -0.04) (end 2.88 -0.04) (layer F.Fab) (width 0.12))

            ${''/* pin names */}
            (pad A thru_hole circle (at -7.62 -2.54) (size 2 2) (drill 1) (layers *.Cu *.Mask) ${p.net.A.str})
            (pad C thru_hole circle (at -7.62 -0.04) (size 2 2) (drill 1) (layers *.Cu *.Mask) ${p.net.C.str})
            (pad B thru_hole circle (at -7.62 2.46) (size 2 2) (drill 1) (layers *.Cu *.Mask) ${p.net.B.str})
            (pad 1 thru_hole circle (at 6.88 -2.54) (size 1.5 1.5) (drill 1) (layers *.Cu *.Mask) ${p.net.from.str})
            (pad 2 thru_hole circle (at 6.88 2.46) (size 1.5 1.5) (drill 1) (layers *.Cu *.Mask) ${p.net.to.str})

            ${''/* Legs */}
            (pad "" thru_hole rect (at -0.12 -5.64 ${p.rot}) (size 3.2 2) (drill oval 2.8 1.5) (layers *.Cu *.Mask))
            (pad "" thru_hole rect (at -0.12 5.56 ${p.rot})  (size 3.2 2) (drill oval 2.8 1.5) (layers *.Cu *.Mask))


             
            (fp_text user "A" (at -7.62 -4.826 ${p.rot + 90} unlocked) (layer "F.SilkS")
              (effects (font (size 1 1) (thickness 0.15)))
            )

            (fp_text user "B" (at -7.62 4.826 ${p.rot + 90} unlocked) (layer "B.SilkS")
              (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
            )
            (fp_line (start -7.92 4.11) (end -7.32 4.11) (layer "B.SilkS") (width 0.12))
            (fp_line (start -7.92 4.11) (end -7.62 3.81) (layer "B.SilkS") (width 0.12))
            (fp_line (start -7.62 3.81) (end -7.32 4.11) (layer "B.SilkS") (width 0.12))

          
            
            (fp_line (start ${offset[0] + 0} ${offset[1] + -0.55}) (end ${offset[0] + -0.75} ${offset[1] + -0.55}) (layer "B.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0} ${offset[1] + -0.55}) (end ${offset[0] + 0.6} ${offset[1] + -0.95}) (layer "B.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0} ${offset[1] + -1.1}) (end ${offset[0] + 0} ${offset[1] + 0}) (layer "B.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 1.25} ${offset[1] + -0.55}) (end ${offset[0] + 0.6} ${offset[1] + -0.55}) (layer "B.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0.6} ${offset[1] + -0.95}) (end ${offset[0] + 0.6} ${offset[1] + -0.15}) (layer "B.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0.6} ${offset[1] + -0.15}) (end ${offset[0] + 0} ${offset[1] + -0.55}) (layer "B.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 1.25} ${offset[1] + -0.55}) (end ${offset[0] + 0.6} ${offset[1] + -0.55}) (layer "F.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0} ${offset[1] + -1.1}) (end ${offset[0] + 0} ${offset[1] + 0}) (layer "F.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0.6} ${offset[1] + -0.15}) (end ${offset[0] + 0} ${offset[1] + -0.55}) (layer "F.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0} ${offset[1] + -0.55}) (end ${offset[0] + 0.6} ${offset[1] + -0.95}) (layer "F.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0} ${offset[1] + -0.55}) (end ${offset[0] + -0.75} ${offset[1] + -0.55}) (layer "F.SilkS") (width 0.1))
            (fp_line (start ${offset[0] + 0.6} ${offset[1] + -0.95}) (end ${offset[0] + 0.6} ${offset[1] + -0.15}) (layer "F.SilkS") (width 0.1))

            (pad "2" smd custom (at ${offset[0] + 0.75} ${offset[1] + -0.55} ${p.rot + 270}) (size 0.25 0.25) (layers "F.Cu")
              (zone_connect 0)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
              ))
            (pad "2" smd custom (at ${offset[0] + 0.75} ${offset[1] + -0.55} ${p.rot + 270}) (size 0.25 0.25) (layers "B.Cu")
              (zone_connect 0)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0 -1.15) (width 0.25))
              ))

            (pad "2" smd rect (at ${offset[0] + 1.9} ${offset[1] + -0.55} ${p.rot + 180}) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "2" smd rect (at ${offset[0] + 1.9} ${offset[1] + -0.55} ${p.rot + 180}) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask"))
            
            (pad "2" smd custom (at ${offset[0] + 1.9} ${offset[1] + -0.55} ${p.rot}) (size 0.25 0.25) (layers "F.Cu")
              (zone_connect 0)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0 6.188) (width 0.25))
              ))
            (pad "2" thru_hole circle (at ${offset[0] + 0.75} ${offset[1] + -0.55} ${p.rot + 270}) (size 0.6 0.6) (drill 0.3) (layers *.Cu)
              (zone_connect 2))

            (pad "3" smd rect (at ${offset[0] + -1.4} ${offset[1] + -0.55} ${p.rot + 180}) (size 0.9 1.2) (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "3" smd rect (at ${offset[0] + -1.4} ${offset[1] + -0.55} ${p.rot + 180}) (size 0.9 1.2) (layers "B.Cu" "B.Paste" "B.Mask"))
            
            (pad "3" thru_hole circle (at ${offset[0] + -0.25} ${offset[1] + -0.55} ${p.rot + 270}) (size 0.6 0.6) (drill 0.3) (layers *.Cu)
              (zone_connect 2))
            (pad "3" smd custom (at ${offset[0] + -0.25} ${offset[1] + -0.55} ${p.rot + 270}) (size 0.25 0.25) (layers "F.Cu")
              (zone_connect 0)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0 1.15) (width 0.25))
              ))
            (pad "3" smd custom (at ${offset[0] + -0.25} ${offset[1] + -0.55} ${p.rot + 270}) (size 0.25 0.25) (layers "B.Cu")
              (zone_connect 0)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0 1.15) (width 0.25))
              ))

    )
    `
}
